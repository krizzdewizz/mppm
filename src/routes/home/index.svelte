<style lang="scss">@import "index";
</style>
<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { mppmLongClick } from '$directives/long-click';
  import { tracksService } from '$services/tracks.service';
  import { storeService } from '$services/store.service';
  import type { TrackWithIndex } from '$model/model';
  import { fileDialog, filterLower, waitFor } from '$services/util';
  import IoIosAdd from 'svelte-icons/io/IoIosAdd.svelte';
  import IoIosMenu from 'svelte-icons/io/IoIosMenu.svelte';
  import IoIosTrash from 'svelte-icons/io/IoIosTrash.svelte';
  import IoIosCreate from 'svelte-icons/io/IoIosCreate.svelte';
  import { actionSheetController, toastController } from '$ionic/svelte';
  import { goto } from '@roxi/routify';
  import { onMount } from 'svelte';
  import { IonSearchbar } from '@ionic/core/components/ion-searchbar';
  import { SoundtouchPlayer } from '$services/soundtouch/soundtouch-player';
  import { fileExists } from '$services/electron';
  import { alertController } from '@ionic/core';
  import { openSearch } from '$services/yt-search';

  let tracks: TrackWithIndex[] = [];
  let filter = '';
  let noTracks = true;
  let searchBar: IonSearchbar;

  onMount(() => {
    updateTracks();

    waitFor(() => searchBar).then(sb => sb?.setFocus());
  });

  function updateTracks() {
    const all = tracksService.tracks.map((track, index) => ({
      ...track,
      index,
      fileLost: tracksService.isFileLost(track)
    }));

    noTracks = all.length === 0;
    tracks = filterLower(all, filter)
        .sort((a, b) => a.name.localeCompare(b.name));
  }

  function onFilterChange(e) {
    filter = e.target.value;
    updateTracks();
  }

  async function importt() {
    const replacer = countTracks => new Promise<boolean>(async resolve => {

      let replace: boolean;
      let alert: HTMLIonAlertElement;

      const doIt = rep => () => {
        replace = rep;
        alert.dismiss();
      };

      alert = await alertController.create({
        header: $_('C_IMPORT_TRACKS', { values: { countTracks } }),
        buttons: [
          {
            text: $_('C_REPLACE'),
            handler: doIt(true)
          },
          {
            text: $_('C_APPEND'),
            handler: doIt(false)
          }
        ]
      });

      alert.onDidDismiss().then(() => resolve(replace));

      await alert.present();
    });

    return storeService.import(replacer);
  }

  async function presentMenu() {
    const options = {
      buttons: [
        noTracks ? undefined : {
          text: $_('C_EXPORT'),
          handler: () => {
            setTimeout(() => storeService.export());
          }
        },
        {
          text: $_('C_IMPORT'),
          handler: () => {
            setTimeout(async () => {
              const ok = await importt();
              if (ok === undefined) {
                return;
              }
              if (ok) {
                updateTracks();
              } else {
                const toast = await toastController.create({
                  message: $_('C_IMPORT_ERROR'),
                  duration: 4000,
                });
                toast.present();
              }
            });
          }
        },
        noTracks ? undefined : {
          text: $_('C_REMOVE_ALL_TRACKS'),
          handler: () => {
            tracksService.removeAll();
            updateTracks();
          }
        },
        {
          text: $_('C_INFO'),
          handler: () => $goto('/info')
        },
      ].filter(Boolean)
    };
    const actionsheet = await actionSheetController.create(options);

    actionsheet.present();
  }

  function addTrack() {
    editTrack(-1);
  }

  function editTrack(trackIndex: number, it?) {
    openSearch.set(true);
    $goto('/add-track/[index]', { index: trackIndex });
  }

  function deleteTrack(track: TrackWithIndex) {
  }

  async function openTrack(track: TrackWithIndex) {

    if (track.file) {
      await SoundtouchPlayer.getInstance();
    }

    if (track.filePath && !await fileExists(track.filePath)) {
      const toast = await toastController.create({
        message: $_('C_FILE_DOES_NOT_EXIST'),
        duration: 4000,
      });
      toast.present();
      return;
    }

    if (track.fileLost) {
      const files = await fileDialog({ accept: 'audio/*' });
      tracksService.tracks[track.index].file = files[0];
    }

    $goto('/track/[index]', { index: track.index });
  }
</script>

<ion-header hidden={noTracks}>
  <ion-toolbar>
    <ion-searchbar bind:this={searchBar} placeholder={$_('C_SEARCH')} on:ionInput={onFilterChange}></ion-searchbar>
  </ion-toolbar>
</ion-header>

<ion-content>
  {#if noTracks}
    <h3 class="title">Musician's Practicing Player</h3>
  {:else}
    <ion-list>
      {#each tracks as track}
        <ion-item-sliding>
          <ion-item-options side="end">
            <ion-item-option class="danger" on:click={() => deleteTrack(track)}>
              <IoIosTrash/>
            </ion-item-option>
            {#if !track.isFile}
              <ion-item-option class="edit" on:click={() => editTrack(track.index, undefined)}>
                <IoIosCreate/>
              </ion-item-option>
            {/if}
          </ion-item-options>

          <ion-item use:mppmLongClick
                    on:mppmClick={() => openTrack(track)}
                    on:mppmClickLong={() => editTrack(track.index, undefined)}>
            <ion-label class:file-lost={track.fileLost}>{track.name}</ion-label>
          </ion-item>
        </ion-item-sliding>
      {/each}
    </ion-list>
  {/if}

  <ion-fab class:with-tracks={!noTracks} vertical={noTracks ? 'center' : 'bottom'}
           horizontal={noTracks ? 'center' : 'end'} slot="fixed">
    <div class="menu-container" on:click={() => presentMenu()}>
      <IoIosMenu class="menu"/>
    </div>
    <ion-fab-button class:pulse={noTracks} on:click={() => addTrack()}>
      <IoIosAdd/>
    </ion-fab-button>
    {#if noTracks}
      <div class="add-track-info pulse">{$_('C_ADD_TRACK')}</div>
    {/if}
  </ion-fab>

</ion-content>


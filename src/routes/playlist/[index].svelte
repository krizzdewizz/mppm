<script lang="ts">
  import { keyBy } from 'lodash';
  import BackButton from '$components/BackButton.svelte';
  import IoIosAdd from 'svelte-icons/io/IoIosAdd.svelte';
  import IoIosPlay from 'svelte-icons/io/IoIosPlay.svelte';
  import { onMount } from 'svelte';
  import { params } from '@roxi/routify';
  import type { Playlist, Track } from '$model/model';
  import { playlistService } from '$services/playlist.service';
  import { tracksService } from '$services/tracks.service';
  import { nameDialog, sleep } from '$services/util';
  import IoIosTrash from 'svelte-icons/io/IoIosTrash.svelte';
  import { modalController } from '$ionic/svelte';
  import TrackSelect from '$components/TrackSelect.svelte';

  let playlist: Playlist;
  let playlistIndex: number;
  let tracks: Track[] = [];
  let reorderGroup;

  function init() {
    const { index } = $params;
    playlistIndex = Number(index);
    playlist = playlistService.playlists[playlistIndex];
    playlist.tracks = playlist.tracks || [];

    onMount(() => {
      updateList();

      setTimeout(() => {
        if (location.hash.includes('add-tracks')) {
          addTrack();
        }
      });
    });
  }

  function updateList() {
    const trackByIndex = keyBy(tracksService.tracks, t => t.index);
    tracks = playlist.tracks.map(trackIndex => trackByIndex[trackIndex]);
  }

  async function addTrack() {

    const playlistCopy = playlistService.copy(playlist.index);

    const modal = await modalController.create({
      cssClass: 'track-select-modal',
      component: TrackSelect,
      componentProps: {
        playlist: playlistCopy
      },
      showBackdrop: true,
      backdropDismiss: false
    });

    modal.onDidDismiss().then(ok => {
      if (ok) {
        playlist = playlistService.playlists[playlistIndex];
        updateList();
      }
    });

    modal.present();
  }

  function deletePlaylist() {
    playlistService.playlists = playlistService.playlists
        .filter(pl => pl.index !== playlist.index)
        .map((pl, index) => ({
          ...pl,
          index
        }));
    playlistService.save();
    history.back();
  }

  async function editName() {
    const name = await nameDialog({ header: 'C_EDIT_NAME', okButtonText: 'C_SAVE', initialValue: playlist.name });
    if (name) {
      playlist.name = name;
      playlistService.save();
    }
  }

  function itemReorder({ detail }) {
    detail.complete();

    const items = Array.from(reorderGroup.querySelectorAll('ion-item'));
    const indexes = items
        .map(x => x.getAttribute('mppm:index'))
        .map(Number);
    playlist.tracks = indexes;
    playlistService.save();
  }

  function startPlaylist() {
    playlistService.start(playlist);
  }

  init();
</script>

<ion-header>
  <ion-toolbar>
    <ion-title><span on:click={editName}>{playlist?.name}</span></ion-title>
    <ion-buttons>
      <BackButton/>
    </ion-buttons>
    <ion-buttons slot="end" class="right-buttons">
      <ion-button class="start-playlist" disabled={playlist.tracks.length === 0} on:click={startPlaylist} fill="clear">
        <IoIosPlay/>
      </ion-button>
      <ion-button on:click={deletePlaylist}>
        <IoIosTrash/>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-list>
    <ion-reorder-group bind:this={reorderGroup} disabled="false" on:ionItemReorder={itemReorder}>
      {#each tracks as track}
        <ion-item mppm:index={track.index}>
          <ion-label>{track.name}</ion-label>
          <ion-reorder slot="end">
            <ion-icon></ion-icon> <!-- no icon -->
          </ion-reorder>
        </ion-item>
      {/each}
    </ion-reorder-group>
  </ion-list>

  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button on:click={addTrack}>
      <IoIosAdd/>
    </ion-fab-button>
  </ion-fab>

</ion-content>

<style lang="scss">

  ion-fab {
    bottom: 130px;
    right: 20px;
  }

  ion-title {
    z-index: 100;
    padding-left: 0;
    position: absolute;
    left: 50px;
    top: -2px;
    cursor: pointer;
  }

  ion-toolbar ion-button {
    height: 46px;
    width: 46px;
    max-width: 46px;
  }

  ion-reorder {
    position: absolute;
    left: 0;
    margin: 0;
    right: 0;
  }

  .edit {
    transform: scale(1.15);
    position: relative;
    left: -3px;
    top: 4px;
  }

  .right-buttons {
    z-index: 101;
  }

  .start-playlist {
    color: $accent;
  }

</style>

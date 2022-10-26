<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { onMount } from 'svelte';
  import type { Playlist, Track } from '$model/model';
  import IoIosArrowBack from 'svelte-icons/io/IoIosArrowBack.svelte';
  import { tracksService } from '$services/tracks.service';
  import { modalController } from '$ionic/svelte';
  import IoIosSquareOutline from 'svelte-icons/io/IoIosSquareOutline.svelte';
  import IoIosCheckboxOutline from 'svelte-icons/io/IoIosCheckboxOutline.svelte';
  import { keyBy, orderBy } from 'lodash';
  import { IonSearchbar } from '@ionic/core/components/ion-searchbar';
  import { filterLower } from '$services/util';
  import { playlistService } from '$services/playlist.service';

  export let playlist: Playlist;

  interface CheckedTrack extends Track {
    checked?: boolean;
  }

  let tracks: CheckedTrack[] = [];
  let filter = '';
  let searchBar: IonSearchbar;

  onMount(() => {
    updateList();
  });

  function dismiss(value?) {
    modalController.dismiss(value);
  }

  function updateList() {
    const existingTracks = keyBy(playlist.tracks, index => index);
    const all = filterLower(tracksService.tracks, filter);
    tracks = orderBy(all.map(track => ({
      ...track,
      checked: existingTracks[track.index] !== undefined
    })), t => t.name.toLowerCase());
  }

  function toggleCheck(track: CheckedTrack) {
    if (track.checked) {
      playlist.tracks = playlist.tracks.filter(i => i !== track.index);
    } else {
      playlist.tracks.push(track.index);
    }
    updateList();
    playlist = playlist;
  }

  function onFilterChange(e) {
    filter = e.target.value;
    updateList();
  }

  function save() {
    playlistService.playlists[playlist.index] = playlist;
    playlistService.save();
    dismiss(true);
  }

</script>

<ion-header>
  <ion-toolbar>
    <ion-buttons>
      <ion-button on:click={dismiss}>
        <IoIosArrowBack/>
      </ion-button>
      <ion-title>{$_('C_ADD_TRACK')}</ion-title>
    </ion-buttons>

    <ion-searchbar bind:this={searchBar} placeholder={$_('C_SEARCH')} on:ionInput={onFilterChange}></ion-searchbar>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-list>
    {#each tracks as track}
      <ion-item on:click={() => toggleCheck(track)}>
        <span class="check" class:checked={track.checked}>
          {#if track.checked}
            <IoIosCheckboxOutline/>
          {:else}
            <IoIosSquareOutline/>
          {/if}
        </span>
        <ion-label>{track.name}</ion-label>
      </ion-item>
    {/each}
  </ion-list>
</ion-content>

<ion-footer>
  <ion-button on:click={save}>{$_('C_SAVE')}</ion-button>
</ion-footer>

<style lang="scss">

  ion-label {
    margin-left: 10px;
  }

  .check {
    width: 30px;
    height: 30px;
  }

  .checked {
    color: $accent;
  }

  ion-item {
    --border-color: transparent;
  }

  ion-toolbar {
    ion-buttons {
      padding-top: 10px;
    }

    ion-button {
      position: relative;
      top: -2px;
    }
  }
</style>

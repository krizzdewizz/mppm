<script lang="ts">
  import { _ } from 'svelte-i18n';
  import BackButton from '$components/BackButton.svelte';
  import IoIosAdd from 'svelte-icons/io/IoIosAdd.svelte';
  import { onMount } from 'svelte';
  import { goto } from '@roxi/routify';
  import type { Playlist } from '$model/model';
  import { playlistService } from '$services/playlist.service';
  import { nameDialog } from '$services/util';
  import { orderBy } from 'lodash';
  import IoIosPlay from 'svelte-icons/io/IoIosPlay.svelte'

  let playlists: Playlist[] = [];

  onMount(() => {
    updateList();
  });

  function openPlaylist({ index }: Playlist) {
    $goto('/playlist/[index]', { index });
  }

  async function addPlaylist() {
    const name = await nameDialog({ header: 'C_ADD_PLAYLIST', okButtonText: 'C_CREATE' });
    if (name) {
      const index = playlistService.playlists.length;
      const playlist: Playlist = { name, tracks: [], index };
      playlistService.playlists.push(playlist);
      playlistService.save();
      openPlaylist(playlist);
    }
  }

  function updateList() {
    playlists = orderBy(playlistService.playlists, t => t.name.toLowerCase());
  }

  function startPlaylist(e) {
    e.cancelBubble = true;
  }
</script>

<ion-header>
  <ion-toolbar>
    <ion-buttons>
      <BackButton/>
    </ion-buttons>
    <ion-title>{$_('C_PLAYLISTS')}</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-list>
    {#each playlists as playlist}
      <ion-item on:click={() => openPlaylist(playlist)}>
        <ion-label>{playlist.name}</ion-label>
        <ion-button on:click={startPlaylist} fill="clear" slot="end"><IoIosPlay/></ion-button>
      </ion-item>
    {/each}
  </ion-list>

  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button on:click={() => addPlaylist()}>
      <IoIosAdd/>
    </ion-fab-button>
  </ion-fab>

</ion-content>

<style lang="scss">

  ion-fab {
    bottom: 50px;
  }
</style>

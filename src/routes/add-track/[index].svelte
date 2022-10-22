<style lang="scss">@import "index";
</style>
<script lang="ts">
  import BackButton from '$components/BackButton.svelte';
  import { _ } from 'svelte-i18n';
  import type { Track } from '$model/model';
  import IoIosSearch from 'svelte-icons/io/IoIosSearch.svelte';
  import IoIosDownload from 'svelte-icons/io/IoIosDownload.svelte';
  import { params } from '@roxi/routify';
  import { tracksService } from '$services/tracks.service';
  import { openSearch, selectedVideo } from '$services/yt-search';
  import { initiateDownload } from '$services/yt-download';
  import { onDestroy, onMount } from 'svelte';
  import { goto } from '@roxi/routify';
  import XIcon from '$components/XIcon.svelte';
  import { waitFor } from '$services/util';
  import type { IonInput } from '@ionic/core/components/ion-input';
  import { getIdFromURL } from '$services/url-parser';
  import { toastController } from '$ionic/svelte';

  const { index } = $params;
  const trackIndex = Number(index);

  const track: Track = trackIndex >= 0
      ? tracksService.copy(trackIndex)
      : {
        name: '',
        videoUrl: '',
        markers: []
      };

  const selVideo = $selectedVideo;
  if (selVideo) {
    track.videoUrl = selVideo.id.videoId;
    track.name = track.name || selVideo.snippet.title;
    selectedVideo.set(undefined);
  }

  let downloading = false;
  let fileInput: HTMLInputElement;
  let nameInput: IonInput;
  let file: File;

  const onDragOver = (e: DragEvent) => e.preventDefault();
  const onDrop = (e: DragEvent) => {
    e.preventDefault();

    const dt = e.dataTransfer;
    if (!dt.files) {
      return;
    }

    file = dt.files[0];
    track.name = file.name;
    track.filePath = (file as any).path;
  };

  onMount(() => {

    if ($openSearch) {
      openSearch.set(false);
      setTimeout(() => ytSearch());
      return;
    }

    document.body.addEventListener('dragover', onDragOver);
    document.body.addEventListener('drop', onDrop);

    waitFor(() => nameInput).then(inp => {
      if (inp && track?.name?.length === 0) {
        inp.setFocus();
      }
    });
  });

  onDestroy(() => {
    document.body.removeEventListener('dragover', onDragOver);
    document.body.removeEventListener('drop', onDrop);
  });

  function ytSearch() {
    $goto('/yt-search');
  }

  async function ytDownload() {
    if (downloading) {
      return;
    }

    downloading = true;
    const ok = await initiateDownload(getIdFromURL(track.videoUrl), track.name);
    if (!ok) {
      const toast = await toastController.create({
        message: $_('C_YT_DOWNLOAD_ERROR'),
        duration: 5000,
      });
      toast.present();
    }
    downloading = false;
  }

  function addTrack() {
    let openTrack = false;
    if (file) {
      tracksService.addFileTrack(file, track.name);
      openTrack = true;
    } else {
      if (trackIndex >= 0) {
        tracksService.tracks[trackIndex] = track;
      } else {
        openTrack = true;
        tracksService.tracks.push(track);
      }
      tracksService.saveTracks();
    }

    history.back();

    setTimeout(() => {
      if (openTrack) {
        $goto('/track/[index]', { index: tracksService.tracks.length - 1 });
      }
    }, 50);
  }

  function onFileChanged(e) {
    file = e.target.files[0];
    track.name = file.name;
    track.filePath = (file as any).path;
  }

  function deleteTrack() {
    tracksService.deleteTrack(trackIndex);
    history.back();
  }

</script>

<ion-header>
  <ion-toolbar>
    <ion-buttons>
      <BackButton/>
    </ion-buttons>
    <ion-title>{ $_(trackIndex < 0 ? 'C_ADD_TRACK' : 'C_EDIT_TRACK') }</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content scroll-y="false">
  <div class="add-track-content">
    <ion-input value={track.name} on:ionChange={e => track.name = e.detail.value} bind:this={nameInput} clear-input
               placeholder={$_('C_NAME')}></ion-input>

    <ion-button fill="clear" class="search" on:click={ytSearch}>
      <XIcon>
        <IoIosSearch/>
      </XIcon>
    </ion-button>

    <ion-input class="url-input" value={track.videoUrl} on:ionChange={e => track.videoUrl = e.detail.value}
               clear-input
               placeholder={$_('C_YT_OR_VIDEO_ID')}></ion-input>

    <ion-button fill="clear" class="download {track.videoUrl ? '' : 'hidden'}"
                on:click={ytDownload}>
      <XIcon>
        <IoIosDownload/>
      </XIcon>
    </ion-button>

    <ion-progress-bar class="progress" class:hidden={!downloading} type="indeterminate"></ion-progress-bar>

    <!--    <pre>-->
    <!--      xxx:{track.name}:xxx-->
    <!--      xxx:{track.videoUrl}:xxx-->
    <!--    </pre>-->
    <!--    {@debug track}-->
  </div>

  <div class="bottom">
    <ion-button fill="outline" class="secondary-button" on:click={fileInput.click()}>
      {$_('C_LOCAL_AUDIO_FILE')}
    </ion-button>

    <input bind:this={fileInput} type="file" hidden accept="audio/*" on:change={e => onFileChanged(e)}>
    <ion-button class="add" disabled={!track.name || (!track.videoUrl && !file)} on:click={() => addTrack()}>
      { $_(trackIndex < 0 ? 'C_ADD' : 'C_SAVE')}</ion-button>
      {#if trackIndex >= 0}
        <ion-button fill="outline" class="secondary-button" on:click={deleteTrack}>
          {$_('C_DELETE')}
        </ion-button>
      {/if}
  </div>

</ion-content>

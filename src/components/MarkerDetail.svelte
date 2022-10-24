<script lang="ts">
  import { modalController } from '$ionic/svelte';
  import IoIosArrowBack from 'svelte-icons/io/IoIosArrowBack.svelte';
  import { tracksService } from '$services/tracks.service';
  import { mrkr } from '$services/mrkr';
  import { _ } from 'svelte-i18n';
  import type { Marker, Track } from '$model/model';
  import { onMount } from 'svelte';
  import { waitFor } from '$services/util';
  import type { IonInput } from '@ionic/core/components/ion-input';

  export let track: Track;
  export let marker: Marker;

  let title = '';
  let titleInput: IonInput;

  function save() {
    marker.title = title;
    tracksService.saveTracks();
    dismiss();
  }

  function dismiss() {
    modalController.dismiss();
  }

  function deleteMarker() {
    track.markers = track.markers.filter(it => it !== marker);
    tracksService.saveTracks();
    dismiss();
  }

  onMount(() => {
    title = marker.title;
    waitFor(() => titleInput).then(inp => inp?.setFocus());
  });
</script>

<ion-header>
  <ion-toolbar>
    <ion-buttons>
      <ion-button on:click={dismiss}>
        <IoIosArrowBack/>
      </ion-button>
    </ion-buttons>
    <ion-title>{$_('C_MARKER')} {mrkr(marker?.value)}</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <div class="marker-detail-content">
    <ion-input value={title} on:ionChange={e => title = e.detail.value} bind:this={titleInput}
               clear-input placeholder={$_('C_DESCRIPTION')}></ion-input>
    <ion-button class="save" on:click={save}>{$_('C_SAVE')}</ion-button>

    <ion-button fill="outline" class="secondary-button" on:click={deleteMarker}>
      {$_('C_DELETE')}
    </ion-button>
  </div>

</ion-content>

<style lang="scss">

  ion-content {
    height: 400px;
  }

  .marker-detail-content {
    padding: 16px;
    display: grid;
  }

  .save {
    margin-top: 20px;
  }

  .secondary-button {
    margin-top: 40px;
  }
</style>

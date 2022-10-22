<style lang="scss">@import "index";
</style>
<script lang="ts">
  import { decode } from 'he';
  import HistoryBack from '$components/HistoryBack.svelte';
  import { _ } from 'svelte-i18n';
  import type { YTSearchResult, YTVideo } from '$model/model';
  import type { IonSearchbar } from '@ionic/core/components/ion-searchbar';
  import { selectedVideo } from '$services/yt-search';
  import { MPPM_Q_BASE_URL } from '$services/yt-download';
  import { onMount } from 'svelte';
  import { waitFor } from '$services/util';

  const EMPTY_RESULT: YTSearchResult = { items: [] };

  let searchbar: IonSearchbar;
  let searchResult = EMPTY_RESULT;
  let error = false;
  let searchRunning = false;

  onMount(() => {
    waitFor(() => searchbar).then(sb => sb?.setFocus());
  });

  const searchYt = async (searchTerm: string) => {
    error = false;
    searchResult = EMPTY_RESULT;
    searchRunning = true;

    const url = `${MPPM_Q_BASE_URL}/ytsearch?q=${encodeURIComponent(searchTerm)}`;

    try {
      const result: YTSearchResult = await fetch(url).then(res => res.json());
      result.items.forEach(({ snippet }) => snippet.title = decode(snippet.title));
      searchResult = result;
    } catch (err) {
      error = true;
    } finally {
      searchRunning = false;
    }
  };

  function visitYt() {
    history.back();
    setTimeout(() => location.assign('https://youtube.com'), 300);
  }

  function selectItem(item: YTVideo) {
    selectedVideo.set(item);
    history.back();
  }

  function onFilterChange(e) {
    const val = e.target.value.trim();
    if (val) {
      searchYt(val);
    } else {
      searchResult = EMPTY_RESULT;
    }
  }

</script>

<ion-header>
  <ion-toolbar>
    <ion-buttons>
      <HistoryBack></HistoryBack>
    </ion-buttons>
  </ion-toolbar>
  <ion-searchbar debounce={1000} bind:this={searchbar} placeholder={$_('C_SEARCH_YT')}
                 on:ionChange={onFilterChange}></ion-searchbar>
</ion-header>

<ion-content>
  {#if searchRunning}
    <ion-spinner name="dots"></ion-spinner>
  {/if}

  {#if error}
    <div class="error">{$_('C_YT_SEARCH_ERROR')}
      <p>
        <a on:click={visitYt}>YouTube</a>
      </p>
    </div>
  {/if}

  {#if !searchRunning && searchResult}
    <ion-list>
      {#each searchResult.items as item}
        <ion-item on:click={() => selectItem(item)}>
          <ion-label>{item.snippet.title}</ion-label>
        </ion-item>
      {/each}
    </ion-list>
  {/if}
</ion-content>

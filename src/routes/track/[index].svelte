<style lang="scss">@import "index";
</style>
<script lang="ts">
  import BackButton from '$components/BackButton.svelte';
  import { mppmLongClick } from '$directives/long-click';
  import IoIosSettings from 'svelte-icons/io/IoIosSettings.svelte';
  import IoIosHelp from 'svelte-icons/io/IoIosHelp.svelte';
  import IoIosSkipBackward from 'svelte-icons/io/IoIosSkipBackward.svelte';
  import IoIosPause from 'svelte-icons/io/IoIosPause.svelte';
  import IoIosFastforward from 'svelte-icons/io/IoIosFastforward.svelte';
  import IoIosRewind from 'svelte-icons/io/IoIosRewind.svelte';
  import IoIosInfinite from 'svelte-icons/io/IoIosInfinite.svelte';
  import IoIosAdd from 'svelte-icons/io/IoIosAdd.svelte';
  import IoIosRemove from 'svelte-icons/io/IoIosRemove.svelte';
  import IoIosPlay from 'svelte-icons/io/IoIosPlay.svelte';
  import IoIosCreate from 'svelte-icons/io/IoIosCreate.svelte';
  import IoIosArrowRoundForward from 'svelte-icons/io/IoIosArrowRoundForward.svelte';
  import IoIosArrowRoundBack from 'svelte-icons/io/IoIosArrowRoundBack.svelte';
  import { params } from '@roxi/routify';
  import type { Marker, Track } from '$model/model';
  import { tracksService } from '$services/tracks.service';
  import { _ } from 'svelte-i18n';
  import { nmbr } from '$services/nmbr';
  import { mrkr } from '$services/mrkr';
  import MppmAudio from '$components/MppmAudio.svelte';
  import { onDestroy, onMount } from 'svelte';
  import {
    setPlayerPropsFromTrack,
    sortMarkers,
    moveMarker,
    seekToActiveMarker,
    openMarkerDetail
  } from '$routes/track/track';
  import { playerService } from '$services/player.service';
  import type { Unsubscriber } from 'svelte/store';
  import {
    backwardForward,
    backwardForwardLong,
    longClickEnd,
    resetVolume,
    resetPitch,
    resetTempo,
    onPitch,
    onVolume,
    seekTo,
    onTempo
  } from '$routes/track/track.js';
  import { appEvent } from '$services/app-event';
  import XIcon from '$components/XIcon.svelte';
  import { goto } from '@roxi/routify';
  import { mppmKey } from '$directives/key';
  import { playlistService } from '$services/playlist.service.js';
  import { sleep } from '$services/util';

  let contentElement: HTMLElement;
  let settingsElement: HTMLElement;
  let ytplayer: HTMLElement;
  let showSettings = false;
  let showHelp = false;
  let playerNotReady = true;
  let playPosition = mrkr(0);

  let isAtStart = false;
  let loopMarker = false;
  let activeMarker: number;
  let playPositionNumber = -1;
  let duration = -1;
  let volume = -1;
  let tempo = -1;
  let pitch = -1;
  let actionSheetVisible = false;
  let subscriptions: Unsubscriber[];
  let track: Track;
  let isPlaying = false;
  let playPositionTimer;
  let trackIndex: number;
  const { activePlaylist } = playlistService;
  let previousTrack: Track;
  let nextTrack: Track;

  $: noActiveMarker = activeMarker === undefined;

  $: {
    previousTrack = undefined;
    nextTrack = undefined;

    const pl = playlistService.playlists[$activePlaylist];
    if (pl) {
      const { tracks } = pl;
      const currIndex = tracks.indexOf(trackIndex);
      if (currIndex > 0) {
        previousTrack = tracksService.tracks[tracks[currIndex - 1]];
      }

      if (currIndex < tracks.length - 1) {
        nextTrack = tracksService.tracks[tracks[currIndex + 1]];
      }
    }
  }

  function init() {
    const { index } = $params;
    trackIndex = Number(index);
    track = tracksService.tracks[trackIndex];

    appEvent.set(undefined);

    onMount(async () => {
      if (track.file) {
        await playerService.openFile(track.file, track.filePath);
      } else {
        playerService.open(track.videoUrl, ytplayer, contentElement.offsetWidth - 8);
      }
      setPlayerPropsFromTrack(track);

      playPositionTimer = setInterval(() => {
        const playing = playerService.isPlaying;
        if (playing !== isPlaying) {
          isPlaying = playing;
        }

        if (!playPosition && !playing) {
          return;
        }

        playPositionNumber = playerService.getCurrentTime();
        playPosition = mrkr(playPositionNumber);

        duration = playerService.getDuration() || 0;
        volume = playerService.getVolume();
        tempo = playerService.getTempo();
        pitch = playerService.getPitch();

        playerNotReady = !playerService.isReady();

        const nextMarkerPos = track.markers[activeMarker + 1]?.value;

        if (loopMarker && activeMarker >= 0 && playPositionNumber > nextMarkerPos) {
          seekToActiveMarker(track, activeMarker);
        }
      }, 400);

      subscriptions = [
        appEvent.subscribe(e => {
          // console.log('Events.marker', e);
          switch (e?.type) {
            case 'ADD':
              addMarker();
              break;
            case 'MOVE_ACTIVE':
              mvMarker(e.back);
              break;
            case 'SET_ACTIVE':
              setActiveMarker(e.index);
              break;
            case 'SEEK_TO_ACTIVE':
              seekToActiveMarker(track, activeMarker);
              break;
            case 'TOGGLE_HELP':
              showHelp = !showHelp;
              break;
            case 'LOOP':
              loopMarker = !loopMarker;
              break;
          }
        })
      ];
    });
  }

  onDestroy(() => {
    subscriptions.forEach(s => s());
    playerService.destroy();
    clearInterval(playPositionTimer);
  });

  const playPause = () => playerService.playPause();
  const seekToStart = () => playerService.seekToStart();

  function addMarker() {
    const currentTime = playerService.getCurrentTime();
    if (currentTime) {
      track.markers.push({ value: currentTime });
      sortMarkers(track);
      activeMarker = track.markers.findIndex(m => m.value === currentTime);
      tracksService.saveTracks();
    }
  }

  function setActiveMarker(index: number) {
    if (index >= 0 && index < track.markers.length) {
      activeMarker = index;
      seekToActiveMarker(track, activeMarker);
    }
  }

  function editTrack(trackIndex: number) {
    history.back();
    setTimeout(() => $goto('/add-track/[index]', { index: trackIndex }), 50);
  }

  function mvMarker(back: boolean) {
    moveMarker(track, activeMarker, back);
    track = track;
  }

  async function openMarker(marker: Marker) {
    await openMarkerDetail(track, marker);
    track = track;
  }

  async function openTrack(next: boolean) {
    const task = next ? nextTrack : previousTrack;
    tracksService.openTrack(task, async () => {
      history.back();
      await sleep(50);
    });
  }

  init();

</script>

<ion-header>
  <ion-toolbar>
    <ion-buttons>
      <BackButton/>
    </ion-buttons>
    <ion-title>{ track?.name }</ion-title>
    <ion-buttons slot="end">
      <ion-button class:settings-visible={showSettings}
                  on:click={e => {showSettings = !showSettings; e.cancelBubble = true}}>
        <IoIosSettings/>
      </ion-button>
      <ion-button class:help-visible={showHelp} on:click={() => showHelp = !showHelp}>
        <IoIosHelp/>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content use:mppmKey bind:this={contentElement} class:show-help={showHelp} scroll-y="false">
  <div class="main-content">
    <div class="tools">
      <ion-button disabled={playerNotReady} class="play-pause player-btn" on:click={playPause}>
        <XIcon>
          {#if isPlaying}
            <IoIosPause/>
          {:else}
            <IoIosPlay/>
          {/if}
        </XIcon>
        <span class="key">space</span>
        <span class="help">{$_('C_HELP_PLAY_PAUSE')}</span>
        <div class="play-position">{playPosition}</div>
      </ion-button>
      <ion-button disabled={playerNotReady} class="seek-to-start player-btn" on:click={seekToStart}>
        <XIcon>
          <IoIosSkipBackward/>
        </XIcon>
        <span class="key">return</span>
        <span class="help">{$_('C_HELP_TO_START')}</span>
      </ion-button>
      <ion-button disabled={playerNotReady} class="backward player-btn" use:mppmLongClick
                  on:mppmClick={() => backwardForward(true)}
                  on:mppmClickLong={() => backwardForwardLong(true)} on:mppmClickEnd={longClickEnd}>
        <XIcon>
          <IoIosRewind/>
        </XIcon>
        <span class="key">left</span>
        <span class="help">{$_('C_HELP_BACKWARD')}</span>
      </ion-button>
      <ion-button disabled={playerNotReady} class="forward player-btn" use:mppmLongClick
                  on:mppmClick={() => backwardForward(false)}
                  on:mppmClickLong={() => backwardForwardLong(false)} on:mppmClickEnd={longClickEnd}>
        <XIcon>
          <IoIosFastforward/>
        </XIcon>
        <span class="key">right</span>
        <span class="help">{$_('C_HELP_FORWARD')}</span>
      </ion-button>
      <div class="marker-tools">
        <ion-button class="marker-play-btn" disabled={noActiveMarker || playerNotReady}
                    on:click={() => seekToActiveMarker(track, activeMarker)}>
          <XIcon>
            <IoIosSkipBackward/>
          </XIcon>
          <span class="key">backspace</span>
          <span class="help">{$_('C_HELP_TO_MARKER')}</span>
        </ion-button>
        <ion-button class="marker-play-btn" disabled={noActiveMarker || playerNotReady}
                    on:click={() => mvMarker(true)}>
          <XIcon>
            <IoIosRewind/>
          </XIcon>
          <span class="key">up</span>
          <span class="help">{$_('C_HELP_PLAY_MARKER_BACKWARD')}</span>
        </ion-button>
        <ion-button class="marker-play-btn" disabled={noActiveMarker || playerNotReady}
                    on:click={() => mvMarker(false)}>
          <XIcon>
            <IoIosFastforward/>
          </XIcon>
          <span class="key">down</span>
          <span class="help">{$_('C_HELP_MARKER_FORWARD')}</span>
        </ion-button>
        <ion-button class="loop-marker marker-play-btn" class:loop-active={loopMarker}
                    disabled={noActiveMarker || playerNotReady} on:click={() => loopMarker = !loopMarker}>
          <XIcon>
            <IoIosInfinite/>
          </XIcon>
          <span class="key">L</span>
          <span class="help">{$_('C_LOOP')}</span>
        </ion-button>
        <ion-button disabled={isAtStart || playerNotReady} on:click={addMarker}>
          <XIcon>
            <IoIosAdd/>
          </XIcon>
          <span class="key">a</span>
          <span class="help">{$_('C_HELP_ADD_MARKER')}</span>
        </ion-button>
      </div>
    </div>

    <div class="markers">
      {#each track.markers as marker, markerIndex}
        <ion-button class="marker-btn" use:mppmLongClick
                    on:mppmClickLong={() => openMarker(marker)}
                    on:mppmClick={() => setActiveMarker(markerIndex)}
                    class:marker-active={activeMarker === markerIndex}
                    class:loop-active={loopMarker && (activeMarker === markerIndex || activeMarker + 1 === markerIndex)}>
          {mrkr(marker.value)}
          <span class="marker-title">{marker.title || ''}</span>
          <span class="key">{markerIndex + 1}</span>
        </ion-button>
      {/each}
    </div>

    <div class="spacer"></div>

    {#if playerNotReady}
      <ion-spinner name="dots"></ion-spinner>
    {/if}

    <div hidden={!track.isFile} class="audio-player">
      <span>{mrkr(playPositionNumber || 0)} / {mrkr(duration)}</span>
      <MppmAudio position={playPositionNumber} on:seek={e => seekTo(e)} duration={duration}></MppmAudio>
    </div>

    <div class="yt-player" hidden={track.isFile || actionSheetVisible}>
      <div bind:this={ytplayer}></div>
    </div>

    <div hidden={!showSettings} class="settings-backdrop" on:click={() => showSettings = false}></div>

    <div bind:this={settingsElement} hidden={!showSettings} class="settings">
      <div class="card">
        <label on:click={() => resetVolume(track)}>{$_('C_VOLUME')}</label>
        <span>{nmbr(volume)}</span>
        <ion-button on:click={() => onVolume(track, volume, true)}>
          <XIcon>
            <IoIosRemove/>
          </XIcon>
        </ion-button>
        <ion-button on:click={() =>onVolume(track, volume, false)}>
          <XIcon>
            <IoIosAdd/>
          </XIcon>
        </ion-button>
      </div>

      {#if track.isFile}
        <div class="card">
          <label on:click={() => resetPitch(track)}>Pitch</label>
          <span>{nmbr(pitch)}</span>
          <ion-button on:click={() => onPitch(track, pitch, true)}>
            <XIcon>
              <IoIosRemove/>
            </XIcon>
          </ion-button>
          <ion-button on:click={() => onPitch(track, pitch, false)}>
            <XIcon>
              <IoIosAdd/>
            </XIcon>
          </ion-button>
        </div>
        <div class="card">
          <label on:click={() => resetTempo(track)}>Tempo</label>
          <span>{nmbr(tempo)}</span>
          <ion-button on:click={() => onTempo(track, tempo, true)}>
            <XIcon>
              <IoIosRemove/>
            </XIcon>
          </ion-button>
          <ion-button on:click={() => onTempo(track, tempo, false)}>
            <XIcon>
              <IoIosAdd/>
            </XIcon>
          </ion-button>
        </div>
      {/if}
      <div class="card edit-track">
        <ion-button fill="clear" on:click={() => editTrack(trackIndex)}>
          <IoIosCreate/>
        </ion-button>
      </div>
    </div>
  </div>
</ion-content>

{#if $activePlaylist !== undefined}
  <ion-footer class="playlist">
    <ion-button disabled={!previousTrack} on:click={() => openTrack(false)}>
      <span class="image">
        <IoIosArrowRoundBack/>
      </span>
      <span class="marker-title">{previousTrack?.name || ''}</span>
    </ion-button>
    <ion-button disabled={!nextTrack} on:click={() => openTrack(true)}>
      <span class="image">
        <IoIosArrowRoundForward/>
      </span>
      <span class="marker-title">{nextTrack?.name || ''}</span>
    </ion-button>
  </ion-footer>
{/if}

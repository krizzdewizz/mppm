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
  import { params } from '@roxi/routify';
  import type { Track } from '$model/model';
  import { tracksService } from '$services/tracks.service';
  import { _ } from 'svelte-i18n';
  import { nmbr } from '$services/nmbr';
  import { mrkr } from '$services/mrkr';
  import MppmAudio from '$components/MppmAudio.svelte';
  import { onDestroy, onMount } from 'svelte';
  import { setPlayerPropsFromTrack, sortMarkers, save } from '$routes/track/track';
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
    onPitchLong,
    onVolume,
    onVolumeLong,
    seekTo,
    onTempoLong,
    onTempo
  } from '$routes/track/track.js';
  import { Events } from '$services/events';
  import XIcon from '$components/XIcon.svelte';

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

  $: noActiveMarker = activeMarker === undefined;

  function init() {
    const { index } = $params;
    const trackIndex = Number(index);
    track = tracksService.tracks[trackIndex];

    onMount(() => {

      subscriptions = [
        playerService.playerReady.subscribe(async () => {
          if (track.file) {
            await playerService.openFile(track.file, track.filePath);
          } else {
            playerService.open(track.videoUrl, ytplayer, contentElement.offsetWidth);
          }
          setPlayerPropsFromTrack(track);

          playerNotReady = false;
        }),

        Events.marker.subscribe(e => {

          console.log('Events.marker', e);

          switch (e?.type) {
            case 'ADD':
              addMarker();
              break;
            case 'MOVE_ACTIVE':
              moveMarker(e.back);
              break;
            case 'SET_ACTIVE':
              setActiveMarker(e.index);
              break;
            case 'SEEK_TO_ACTIVE':
              seekToActiveMarker();
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

        const nextMarkerPos = track.markers[activeMarker + 1]?.value;

        if (loopMarker && activeMarker >= 0 && playPositionNumber > nextMarkerPos) {
          seekToActiveMarker();
        }

      }, 400);
    });
  }

  onDestroy(() => {
    subscriptions.forEach(s => s());
    playerService.destroy();
    clearInterval(playPositionTimer);
  });

  const playPause = () => playerService.playPause();
  const seekToStart = () => playerService.seekToStart();

  function seekToActiveMarker() {
    if (noActiveMarker) {
      return;
    }
    playerService.seekTo(track.markers[activeMarker].value);
  }

  function moveMarker(b) {
  }

  function addMarker() {
    const currentTime = playerService.getCurrentTime();
    if (currentTime) {
      track.markers.push({ value: currentTime });
      sortMarkers(track);
      activeMarker = track.markers.findIndex(m => m.value === currentTime);
      tracksService.saveTracks();
    }
  }

  function moveMarkerLong(b) {
  }

  function setActiveMarker(index: number) {
    if (index >= 0 && index < track.markers.length) {
      activeMarker = index;
      seekToActiveMarker();
    }
  }

  function presentActionSheet(index) {
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

<ion-content bind:this={contentElement} class:show-help={showHelp} scroll-y="false">
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
                    on:click={seekToActiveMarker}>
          <XIcon>
            <IoIosSkipBackward/>
          </XIcon>
          <span class="key">backspace</span>
          <span class="help">{$_('C_HELP_TO_MARKER')}</span>
        </ion-button>
        <ion-button class="marker-play-btn" disabled={noActiveMarker || playerNotReady} use:mppmLongClick
                    on:mppmClick={() => moveMarker(true)}
                    mppmClickLong={() => moveMarkerLong(true)} on:mppmClickEnd={longClickEnd}>
          <XIcon>
            <IoIosRewind/>
          </XIcon>
          <span class="key">up</span>
          <span class="help">{$_('C_HELP_PLAY_MARKER_BACKWARD')}</span>
        </ion-button>
        <ion-button class="marker-play-btn" disabled={noActiveMarker || playerNotReady} use:mppmLongClick
                    on:mppmClick={() => moveMarker(false)}
                    on:mppmClickLong={() => moveMarkerLong(false)} on:mppmClickEnd={longClickEnd}>
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
                    on:mppmClickLong={() => presentActionSheet(markerIndex)}
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

    <div hidden={track.isFile || actionSheetVisible}>
      <div bind:this={ytplayer}></div>
    </div>

    <div hidden={!showSettings} class="settings-backdrop" on:click={() => showSettings = false}></div>

    <div bind:this={settingsElement} hidden={!showSettings} class="settings">
      <div class="card">
        <label on:click={() => resetVolume(track)}>{$_('C_VOLUME')}</label>
        <span>{nmbr(volume)}</span>
        <ion-button use:mppmLongClick on:mppmClickLong={() => onVolumeLong(track, volume, true)}
                    on:mppmClick={() => onVolume(track, volume, true)}
                    on:mppmClickEnd={longClickEnd}>
          <XIcon>
            <IoIosRemove/>
          </XIcon>
        </ion-button>
        <ion-button use:mppmLongClick on:mppmClickLong={() => onVolumeLong(track, volume, false)}
                    on:mppmClick={() =>onVolume(track, volume, false)}
                    on:mppmClickEnd={longClickEnd}>
          <XIcon>
            <IoIosAdd/>
          </XIcon>
        </ion-button>
      </div>

      {#if track.isFile}

        <div class="card">
          <label on:click={() => resetPitch(track)}>Pitch</label>
          <span>{nmbr(pitch)}</span>
          <ion-button use:mppmLongClick on:mppmClickLong={() => onPitchLong(track, pitch, true)}
                      on:mppmClick={() => onPitch(track, pitch, true)}
                      on:mppmClickEnd={longClickEnd}>
            <XIcon>
              <IoIosRemove/>
            </XIcon>
          </ion-button>
          <ion-button use:mppmLongClick on:mppmClickLong={() =>onPitchLong(track, pitch, false)}
                      on:mppmClick={() => onPitch(track, pitch, false)}
                      on:mppmClickEnd={longClickEnd}>
            <XIcon>
              <IoIosAdd/>
            </XIcon>
          </ion-button>
        </div>
        <div class="card">
          <label on:click={() => resetTempo(track)}>Tempo</label>
          <span>{nmbr(tempo)}</span>
          <ion-button use:mppmLongClick on:mppmClickLong={() =>onTempoLong(track, tempo, true)}
                      on:mppmClick={() => onTempo(track, tempo, true)}
                      on:mppmClickEnd={longClickEnd}>
            <XIcon>
              <IoIosRemove/>
            </XIcon>
          </ion-button>
          <ion-button use:mppmLongClick on:mppmClickLong={() =>onTempoLong(track, tempo, false)}
                      on:mppmClick={() => onTempo(track, tempo, false)}
                      on:mppmClickEnd={longClickEnd}>
            <XIcon>
              <IoIosAdd/>
            </XIcon>
          </ion-button>
        </div>
      {/if}
    </div>
  </div>
</ion-content>

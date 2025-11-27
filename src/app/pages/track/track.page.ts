import { AfterViewInit, Component, effect, ElementRef, inject, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonButtons, IonHeader, IonToolbar, IonBackButton, IonTitle, IonButton, IonIcon, IonContent, IonSpinner } from '@ionic/angular/standalone';
import { Marker, Track } from '@model/model';
import { TranslatePipe } from '@ngx-translate/core';
import { appEvent } from '@services/app-event';
import { mrkr } from '@services/mrkr';
import { PlayerService } from '@services/player.service';
import { TracksService } from '@services/tracks.service';
import { TrackService } from '@services/track.service';
import { nmbr } from '@services/nmbr';
import { MppmAudioComponent } from '@components/mppm-audio/mppm-audio.component';
import { LongClickDirective } from '@directives/long-click.directive';
import { KeyDirective } from '@directives/key.directive';

@Component({
  selector: 'mppm-track',
  templateUrl: './track.page.html',
  styleUrls: ['./track.page.scss'],
  imports: [KeyDirective, LongClickDirective, TranslatePipe, IonSpinner, IonContent, IonIcon, IonButton, IonTitle, IonToolbar, IonHeader, IonButtons, IonBackButton, MppmAudioComponent],
})
export class TrackPage implements AfterViewInit, OnDestroy {

  route = inject(ActivatedRoute);
  tracksService = inject(TracksService);
  trackService = inject(TrackService);
  playerService = inject(PlayerService);

  @ViewChild('contentElement', { read: ElementRef })
  contentElement: ElementRef;

  @ViewChild('ytPlayer')
  ytplayer: ElementRef;

  showSettings = false;
  showHelp = false;
  playerNotReady = true;
  playPosition = mrkr(0);

  isAtStart = false;
  loopMarker = false;
  activeMarker: number;
  playPositionNumber = -1;
  duration = -1;
  volume = -1;
  tempo = -1;
  pitch = -1;
  actionSheetVisible = false;
  track: Track;
  isPlaying = false;
  playPositionTimer;
  trackIndex: number;
  previousTrack: Track;
  nextTrack: Track;
  autoPlayed = false;

  mrkr = mrkr;
  nmbr = nmbr;

  constructor() {
    effect(() => {
      const e = appEvent();
      // console.log('Events.marker', e);
      switch (e?.type) {
        case 'ADD':
          this.addMarker();
          break;
        case 'MOVE_ACTIVE':
          this.mvMarker(e.back);
          break;
        case 'SET_ACTIVE':
          this.setActiveMarker(e.index);
          break;
        case 'SEEK_TO_ACTIVE':
          this.trackService.seekToActiveMarker(this.track, this.activeMarker);
          break;
        case 'TOGGLE_HELP':
          this.showHelp = !this.showHelp;
          break;
        case 'LOOP':
          this.loopMarker = !this.loopMarker;
          break;
      }
    });
  }

  get noActiveMarker() {
    return this.activeMarker === undefined;
  }

  async ngAfterViewInit() {
    this.trackIndex = Number(this.route.snapshot.params['trackIndex']);
    this.track = this.tracksService.tracks[this.trackIndex];

    appEvent.set(undefined);

    if (this.track.file) {
      await this.playerService.openFile(this.track.file, this.track.filePath);
    } else {
      this.playerService.open(this.track.videoUrl, this.ytplayer.nativeElement, this.contentElement.nativeElement.offsetWidth - 8);
    }
    this.trackService.setPlayerPropsFromTrack(this.track);

    this.playPositionTimer = setInterval(() => {
      const playing = this.playerService.isPlaying;
      if (playing !== this.isPlaying) {
        this.isPlaying = playing;
      }

      if (!this.playPosition && !playing) {
        return;
      }

      this.playPositionNumber = this.playerService.getCurrentTime();
      this.playPosition = mrkr(this.playPositionNumber);

      this.duration = this.playerService.getDuration() || 0;
      this.volume = this.playerService.getVolume();
      this.tempo = this.playerService.getTempo();
      this.pitch = this.playerService.getPitch();

      this.playerNotReady = !this.playerService.isReady();

      const nextMarkerPos = this.track.markers[this.activeMarker + 1]?.value;

      if (this.loopMarker && this.activeMarker >= 0 && this.playPositionNumber > nextMarkerPos) {
        this.trackService.seekToActiveMarker(this.track, this.activeMarker);
      }

      // if ($activePlaylist !== undefined && playerService.isReady() && !isPlaying && !autoPlayed) {
      //   try {
      //     playPause();
      //     autoPlayed = true;
      //   } catch (e) {
      //     // may still not be ready
      //   }
      // }

    }, 400);
  }

  ngOnDestroy() {
    this.playerService.destroy();
    clearInterval(this.playPositionTimer);
  }

  addMarker() {
    const currentTime = this.playerService.getCurrentTime();
    if (currentTime) {
      this.track.markers.push({ value: currentTime });
      this.trackService.sortMarkers(this.track);
      this.activeMarker = this.track.markers.findIndex(m => m.value === currentTime);
      this.tracksService.saveTracks();
    }
  }

  setActiveMarker(index: number) {
    if (index >= 0 && index < this.track.markers.length) {
      this.activeMarker = index;
      this.trackService.seekToActiveMarker(this.track, this.activeMarker);
    }
  }

  // editTrack(trackIndex: number) {
  //   history.back();
  //   goto(`/add-track/${trackIndex}`, 50);
  // }

  mvMarker(back: boolean) {
    this.trackService.moveMarker(this.track, this.activeMarker, back);
    this.track = this.track;
  }

  async openMarker(marker: Marker) {
    await this.trackService.openMarkerDetail(this.track, marker);
    // track = track;
  }

  // async openTrack(next: boolean) {
  //   const task = next ? nextTrack : previousTrack;
  //   tracksService.openTrack(task, async () => {
  //     history.back();
  //     await sleep(50);
  //   });
  // }
}

import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Events, MarkerAction, MarkerEvent } from '../common/events';
import { MarkerPipe } from '../common/marker.pipe';
import { XlatePipe } from '../common/xlate.pipe';
import { Track } from '../model';
import { incrValue, PlayerService } from '../player.service';
import { TracksService } from '../tracks.service';

const LONG_CLICK_SEEK_INTERVAL = 200;
const LONG_CLICK_SEEK_SECONDS = 5;

@Component({
  selector: 'mppm-track',
  templateUrl: './track.page.html',
  styleUrls: ['./track.page.scss'],
})
export class TrackPage implements OnInit, OnDestroy {

  track: Track;
  showHelp = false;
  showKeyHelp = false;
  showSettings = false;
  playPosition: string;
  playPositionNumber: number;
  activeMarker: number;

  private trackIndex: number;
  private readonly subscription = new Subscription();
  private longClickInterval;
  private playPositionTimer;
  private saveTimer;

  @ViewChild('ytplayer', { static: true }) ytplayer: ElementRef;
  @ViewChild('header', { static: true, read: ElementRef }) header: ElementRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tracksService: TracksService,
    private playerService: PlayerService,
    public actionSheetController: ActionSheetController,
    private nav: NavController,
    private xlate: XlatePipe,
    private markerPipe: MarkerPipe) {
  }

  ngOnInit() {
    this.trackIndex = Number(this.activatedRoute.snapshot.paramMap.get('index'));
    this.track = this.tracksService.tracks[this.trackIndex];

    this.setPlayerPropsFromTrack();

    this.subscription.add(this.playerService.playerReady.subscribe(() => {
      if (this.track.file) {
        this.playerService.openFile(this.track.file);
        this.setPlayerPropsFromTrack();
      } else {
        this.playerService.open(this.track.videoUrl, this.ytplayer, this.header.nativeElement.offsetWidth);
      }
    }));

    this.subscription.add(this.playerService.volumeChange.subscribe(volume => {
      this.track.volume = volume;
      this.save();
    }));

    this.subscription.add(Events.marker.subscribe((e: MarkerEvent) => {
      switch (e.action) {
        case MarkerAction.ADD:
          this.addMarker();
          break;
        case MarkerAction.MOVE_ACTIVE:
          this.moveMarker(e.data);
          break;
        case MarkerAction.SET_ACTIVE:
          this.setActiveMarker(e.data);
          break;
        case MarkerAction.SEEK_TO_ACTIVE:
          this.seekToActiveMarker();
          break;
        case MarkerAction.TOGGLE_HELP:
          this.showKeyHelp = !this.showKeyHelp;
          break;
      }
    }));

    this.playPositionTimer = setInterval(() => {
      if (!this.playPosition && !this.playerService.isPlaying) {
        return;
      }
      this.playPositionNumber = this.playerService.getCurrentTime();
      this.playPosition = this.markerPipe.transform(this.playPositionNumber);
    }, 500);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.playerService.destroy();
    clearInterval(this.playPositionTimer);
  }

  get playPauseIcon() {
    return this.playerService.isPlaying ? 'pause' : 'play';
  }

  get markers() {
    return this.track.markers;
  }

  playPause() {
    this.playerService.playPause();
  }

  seekToStart() {
    this.playerService.seekToStart();
  }

  seekTo(seconds: number) {
    this.playerService.seekTo(seconds);
  }

  backwardForward(back: boolean, amount = 1) {
    this.playerService.backwardForward(back, amount);
  }

  backwardForwardLong(back: boolean) {
    this.longClickInterval = setInterval(() => this.backwardForward(back, LONG_CLICK_SEEK_SECONDS), LONG_CLICK_SEEK_INTERVAL);
  }

  longClickEnd() {
    clearInterval(this.longClickInterval);
  }

  moveMarkerLong(back: boolean) {
    this.longClickInterval = setInterval(() => this.moveMarker(back, LONG_CLICK_SEEK_SECONDS), LONG_CLICK_SEEK_INTERVAL);
  }

  seekToActiveMarker() {
    if (this.noActiveMarker) {
      return;
    }
    this.playerService.seekTo(this.track.markers[this.activeMarker].value);
  }

  get noActiveMarker() {
    return this.activeMarker === undefined;
  }

  get isAtStart() {
    return this.playerService.getCurrentTime() === 0;
  }

  addMarker() {
    const currentTime = this.playerService.getCurrentTime();
    if (currentTime) {
      this.track.markers.push({ value: currentTime });
      this.sortMarkers();
      this.activeMarker = this.track.markers.findIndex(m => m.value === currentTime);
      this.tracksService.saveTracks();
    }
  }

  deleteMarker(markerIndex: number) {
    this.track.markers = this.track.markers.filter((it, i) => i !== markerIndex);
    delete this.activeMarker;
    this.tracksService.saveTracks();
  }

  setActiveMarker(index: number) {
    if (index >= 0 && index < this.track.markers.length) {
      this.activeMarker = index;
      this.seekToActiveMarker();
    }
  }

  moveMarker(back: boolean, amount = 1) {
    const { activeMarker, track } = this;
    const { markers } = track;
    const newMarker = incrValue(markers[activeMarker].value, back, amount);
    markers[activeMarker].value = newMarker;
    this.sortMarkers();
    this.activeMarker = markers.findIndex(m => m.value === newMarker);
    this.seekToActiveMarker();
    this.tracksService.saveTracks();
  }

  private sortMarkers() {
    this.track.markers.sort((a, b) => a.value < b.value ? -1 : a.value > b.value ? 1 : 0);
  }

  async presentActionSheet(markerIndex: number) {
    const actionSheet = await this.actionSheetController.create({
      header: `${this.xlate.transform('C_MARKER')} ${this.track.markers[markerIndex].title || ''}`,
      buttons: [
        {
          text: this.xlate.transform('C_DESCRIPTION'),
          icon: 'create',
          handler: () => this.nav.navigateForward(['/marker-detail', this.trackIndex, markerIndex])
        },
        {
          text: this.xlate.transform('C_DELETE'),
          icon: 'trash',
          handler: () => this.deleteMarker(markerIndex)
        }
      ]
    });
    await actionSheet.present();
  }

  get volume() {
    return this.playerService.getVolume();
  }

  get pitch() {
    return this.playerService.screwAudioPlayer ? this.playerService.screwAudioPlayer.pitch : 1;
  }

  get tempo() {
    return this.playerService.screwAudioPlayer ? this.playerService.screwAudioPlayer.tempo : 1;
  }

  get duration() {
    return this.playerService.player && this.playerService.player.getDuration ? this.playerService.player.getDuration() : undefined;
  }

  resetVolume() {
    this.playerService.setVolume(1, { emitChangeEvent: false });
    this.track.volume = 1;
    this.save();
  }

  resetPitch() {
    this.track.pitch = this.playerService.screwAudioPlayer.pitch = 1;
    this.save();
  }

  resetTempo() {
    this.track.tempo = this.playerService.screwAudioPlayer.tempo = 1;
    this.save();
  }

  onVolume(decr: boolean, amount = 0.05) {
    const vol = incrValue(this.volume || 1, decr, amount);
    this.playerService.setVolume(vol, { emitChangeEvent: false });
    this.track.volume = this.playerService.getVolume();
    this.save();
  }

  onVolumeLong(decr: boolean) {
    this.longClickInterval = setInterval(() => this.onVolume(decr, 0.1), LONG_CLICK_SEEK_INTERVAL);
  }

  onPitch(decr: boolean, amount = 0.01) {
    this.track.pitch = this.playerService.screwAudioPlayer.pitch = incrValue(this.pitch || 1, decr, amount);
    this.save();
  }

  onPitchLong(decr: boolean) {
    this.longClickInterval = setInterval(() => this.onPitch(decr, 0.05), LONG_CLICK_SEEK_INTERVAL);
  }

  onTempo(decr: boolean, amount = 0.01) {
    this.track.tempo = this.playerService.screwAudioPlayer.tempo = incrValue(this.tempo || 1, decr, amount);
    this.save();
  }

  onTempoLong(decr: boolean) {
    this.longClickInterval = setInterval(() => this.onTempo(decr, 0.05), LONG_CLICK_SEEK_INTERVAL);
  }

  private save() {
    clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(() => this.tracksService.saveTracks(), 1000);
  }

  private setPlayerPropsFromTrack() {
    this.playerService.setVolume(this.track.volume || 1, { emitChangeEvent: false });
    if (this.playerService.screwAudioPlayer) {
      this.playerService.screwAudioPlayer.pitch = this.track.pitch || 1;
      this.playerService.screwAudioPlayer.tempo = this.track.tempo || 1;
    }
  }
}

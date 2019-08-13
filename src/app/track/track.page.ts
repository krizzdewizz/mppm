import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Track} from '../model';
import {TracksService} from '../tracks.service';
import {incrTime, PlayerService} from '../player.service';
import {Subscription} from 'rxjs';
import {ActionSheetController, NavController} from '@ionic/angular';
import {XlatePipe} from '../common/xlate.pipe';
import {Events, MarkerAction, MarkerEvent} from '../common/events';
import {MarkerPipe} from '../common/marker.pipe';

const LONG_CLICK_SEEK_INTERVAL = 200;
const LONG_CLICK_SEEK_SECONDS = 5;

@Component({
    selector: 'app-track',
    templateUrl: './track.page.html',
    styleUrls: ['./track.page.scss'],
})
export class TrackPage implements OnInit, OnDestroy {

    track: Track;
    showHelp = false;
    playPosition: string;

    private trackIndex: number;
    private subscription: Subscription;
    private activeMarker: number;
    private longClickInterval;
    private playPositionTimer;

    @ViewChild('ytplayer', {static: true}) ytplayer: ElementRef;
    @ViewChild('audio', {static: true}) audio: ElementRef;
    @ViewChild('header', {static: true, read: ElementRef}) header: ElementRef;

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
        this.subscription = this.playerService.playerReady.subscribe(() => {
            if (this.track.file) {
                this.playerService.openFile(this.track.file, this.audio.nativeElement);
            } else {
                this.playerService.open(this.track.videoUrl, this.ytplayer, this.header.nativeElement.offsetWidth);
            }
        });

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
                    this.showHelp = !this.showHelp;
                    break;
            }
        }));

        this.playPositionTimer = setInterval(() => {
            if (!this.playPosition && !this.playerService.isPlaying) {
                return;
            }
            this.playPosition = this.markerPipe.transform(this.playerService.getCurrentTime());
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
        this.playerService.seekTo(this.track.markers[this.activeMarker].value, true);
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
            this.track.markers.push({value: currentTime});
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
        const {activeMarker, track} = this;
        const {markers} = track;
        const newMarker = incrTime(markers[activeMarker].value, back, amount);
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
}

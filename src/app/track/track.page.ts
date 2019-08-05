import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Track} from '../model';
import {TracksService} from '../tracks.service';
import {incrTime, PlayerService} from '../player.service';
import {Subscription} from 'rxjs';
import {ActionSheetController, NavController} from '@ionic/angular';

@Component({
    selector: 'app-track',
    templateUrl: './track.page.html',
    styleUrls: ['./track.page.scss'],
})
export class TrackPage implements OnInit, OnDestroy {

    track: Track;
    private trackIndex: number;
    private subscription: Subscription;
    private activeMarker: number;
    private longPressTimer;

    @ViewChild('ytplayer', {static: true}) ytplayer: ElementRef;
    @ViewChild('header', {static: true, read: ElementRef}) header: ElementRef;
    private hadMenu: boolean;

    constructor(
        private activatedRoute: ActivatedRoute,
        private tracksService: TracksService,
        private playerService: PlayerService,
        public actionSheetController: ActionSheetController,
        private nav: NavController) {
    }

    ngOnInit() {
        this.trackIndex = Number(this.activatedRoute.snapshot.paramMap.get('index'));
        this.track = this.tracksService.tracks[this.trackIndex];
        this.subscription = this.playerService.playerReady.subscribe(() => {
            this.playerService.open(this.track.videoUrl, this.ytplayer, this.header.nativeElement.offsetWidth);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.playerService.destroy();
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

    backward() {
        this.playerService.backwardForward(true);
    }

    forward() {
        this.playerService.backwardForward(false);
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
        this.activeMarker = index;
        this.seekToActiveMarker();
    }

    moveMarker(back: boolean) {
        const {activeMarker, track} = this;
        const {markers} = track;
        const newMarker = incrTime(markers[activeMarker].value, back);
        markers[activeMarker].value = newMarker;
        this.sortMarkers();
        this.activeMarker = markers.findIndex(m => m.value === newMarker);
        this.seekToActiveMarker();
        this.tracksService.saveTracks();
    }

    private sortMarkers() {
        this.track.markers.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
    }

    mouse(markerIndex: number, down: boolean) {
        if (down) {
            this.hadMenu = false;
            this.longPressTimer = setTimeout((() => {
                this.hadMenu = true;
                this.presentActionSheet(markerIndex);
            }), 800);
        } else if (!this.hadMenu) {
            clearTimeout(this.longPressTimer);
            this.setActiveMarker(markerIndex);
        }

        return false;
    }

    async presentActionSheet(markerIndex: number) {
        const actionSheet = await this.actionSheetController.create({
            header: 'Marker',
            buttons: [
                {
                    text: 'Delete',
                    icon: 'trash',
                    handler: () => this.deleteMarker(markerIndex)
                },
                {
                    text: 'Annotate',
                    icon: 'create',
                    handler: () => this.nav.navigateForward(`marker-detail/${this.trackIndex}/${markerIndex}`)
                }
            ]
        });
        await actionSheet.present();
    }
}

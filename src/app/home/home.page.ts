import {Component} from '@angular/core';
import {Track} from '../model';
import {ActionSheetController, NavController, ToastController} from '@ionic/angular';
import {TracksService} from '../tracks.service';
import {XlatePipe} from '../common/xlate.pipe';
import {StoreService} from '../store.service';

interface TrackWithIndex extends Track {
    index: number;
}

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    tracks: TrackWithIndex[];

    private filter = '';

    constructor(private tracksService: TracksService,
                private nav: NavController,
                public actionSheetController: ActionSheetController,
                private xlate: XlatePipe,
                private storeService: StoreService,
                private toastController: ToastController) {
    }

    ionViewWillEnter() {
        this.updateTracks();
    }

    private updateTracks() {
        const tracks = this.tracksService.tracks.map((track, index) => ({...track, index}));
        const filterLower = this.filter.toLowerCase().trim();
        if (filterLower) {
            this.tracks = tracks.filter(track => track.name.toLowerCase().includes(filterLower));
        } else {
            this.tracks = tracks;
        }

        this.tracks.sort((a, b) => a.name.localeCompare(b.name));
    }

    onFilterChange(e) {
        this.filter = e.target.value;
        this.updateTracks();
    }

    deleteTrack(track: TrackWithIndex) {
        this.tracksService.deleteTrack(track.index);
        this.updateTracks();
    }

    editTrack(track: TrackWithIndex, item) {
        item.close();
        this.nav.navigateForward(['/add-track', track.index]);
    }

    addTrack() {
        this.nav.navigateForward(['/add-track', -1]);
    }

    async presentMenu() {
        const actionSheet = await this.actionSheetController.create({
            // header: this.xlate.transform('C_MARKER'),
            buttons: [
                {
                    text: this.xlate.transform('C_EXPORT'),
                    handler: () => {
                        setTimeout(() => this.storeService.export());
                    }
                },
                {
                    text: this.xlate.transform('C_IMPORT'),
                    handler: () => {
                        setTimeout(async () => {
                            const ok = await this.storeService.import();
                            if (ok) {
                                this.updateTracks();
                            } else {
                                const toast = await this.toastController.create({
                                    message: this.xlate.transform('C_IMPORT_ERROR'),
                                    showCloseButton: true,
                                    closeButtonText: '✖',
                                    duration: 4000,
                                });
                                toast.present();
                            }
                        });
                    }
                },
                {
                    text: this.xlate.transform('C_INFO'),
                    handler: () => this.presentInfo()
                },
            ]
        });
        await actionSheet.present();
    }

    openTrack(track: TrackWithIndex) {
        this.nav.navigateForward(['/track', track.index]);
    }

    private presentInfo() {
        this.nav.navigateForward('/info');
    }
}

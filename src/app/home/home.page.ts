import { Component } from '@angular/core';
import { Track } from '../model';
import { ActionSheetController, AlertController, NavController, ToastController } from '@ionic/angular';
import { TracksService } from '../tracks.service';
import { XlatePipe } from '../common/xlate.pipe';
import { StoreService } from '../store.service';
import { fileDialog } from '../util';
import { YtDownloadService } from '../yt/yt-download.service';
import { getIdFromURL } from '../url-parser';

interface TrackWithIndex extends Track {
    index: number;
    fileLost: boolean;
}

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    tracks: TrackWithIndex[] = [];

    private filter = '';

    get noTracks(): boolean {
        return this.tracks.length === 0;
    }

    constructor(private tracksService: TracksService,
        private nav: NavController,
        public actionSheetController: ActionSheetController,
        private xlate: XlatePipe,
        private storeService: StoreService,
        private toastController: ToastController,
        private alertController: AlertController,
        private ytDownloadService: YtDownloadService) {
    }

    ionViewWillEnter() {
        this.updateTracks();
        document.body.addEventListener('dragover', this.onDragOver);
        document.body.addEventListener('drop', this.onDrop);
    }

    ionViewWillLeave() {
        document.body.removeEventListener('dragover', this.onDragOver);
        document.body.removeEventListener('drop', this.onDrop);
    }

    private updateTracks() {
        const tracks = this.tracksService.tracks.map((track, index) => ({
            ...track,
            index,
            fileLost: this.isFileLost(track)
        }));
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

    downloadTrack(track: TrackWithIndex, item) {
        item.close();
        this.ytDownloadService.initateDownload(getIdFromURL(track.videoUrl)).subscribe(ok => {
            console.log('okokokokoko', ok);
        });
    }

    async addTrack() {
        await this.nav.navigateForward(['/add-track', -1], { animated: false });
        await this.nav.navigateForward('/yt-search');
    }

    async presentMenu() {
        const actionSheet = await this.actionSheetController.create({
            buttons: [
                this.noTracks ? undefined : {
                    text: this.xlate.transform('C_EXPORT'),
                    handler: () => {
                        setTimeout(() => this.storeService.export());
                    }
                },
                {
                    text: this.xlate.transform('C_IMPORT'),
                    handler: () => {
                        setTimeout(async () => {
                            const ok = await this.import();
                            if (ok === undefined) {
                                return;
                            }
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
                this.noTracks ? undefined : {
                    text: this.xlate.transform('C_REMOVE_ALL_TRACKS'),
                    handler: () => {
                        this.tracksService.removeAll();
                        this.updateTracks();
                    }
                },
                {
                    text: this.xlate.transform('C_INFO'),
                    handler: () => this.presentInfo()
                },
            ].filter(Boolean)
        });
        await actionSheet.present();
    }

    private async import() {
        const replacer = countTracks => new Promise<boolean>(async resolve => {

            let replace: boolean;
            let alert: HTMLIonAlertElement;

            const doIt = rep => () => {
                replace = rep;
                alert.dismiss();
            };

            alert = await this.alertController.create({
                header: this.xlate.transform('C_IMPORT_TRACKS', { countTracks }),
                buttons: [
                    {
                        text: this.xlate.transform('C_REPLACE'),
                        handler: doIt(true)
                    },
                    {
                        text: this.xlate.transform('C_APPEND'),
                        handler: doIt(false)
                    }
                ]
            });

            alert.onDidDismiss().then(() => resolve(replace));

            await alert.present();
        });

        return this.storeService.import(replacer);
    }

    async openTrack(track: TrackWithIndex) {
        if (track.fileLost) {
            const files = await fileDialog({ accept: 'audio/*' });
            this.tracksService.tracks[track.index].file = files[0];
        }
        this.nav.navigateForward(['/track', track.index]);
    }

    private presentInfo() {
        this.nav.navigateForward('/info');
    }

    private onDragOver = (e: DragEvent) => e.preventDefault();

    private onDrop = (e: DragEvent) => {

        e.preventDefault();

        const dt = e.dataTransfer;
        if (!dt.files) {
            return;
        }
        const file = dt.files[0];
        const { track, index } = this.tracksService.addFileTrack(file);
        this.openTrack({ ...track, index, fileLost: false });
    }

    private isFileLost({ isFile, file }: Track) {
        return isFile && file && typeof file.slice !== 'function';
    }
}

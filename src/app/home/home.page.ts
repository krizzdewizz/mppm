import {Component} from '@angular/core';
import {Track} from '../model';
import {NavController} from '@ionic/angular';
import {TracksService} from '../tracks.service';

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

    constructor(private tracksService: TracksService, private nav: NavController) {
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
}

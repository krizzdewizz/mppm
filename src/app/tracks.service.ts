import {Injectable} from '@angular/core';
import {Track} from './model';
import {StoreService} from './store.service';

@Injectable()
export class TracksService {

    get tracks(): Track[] {
        return this.storeService.mpp.tracks;
    }

    set tracks(value: Track[]) {
        this.storeService.mpp.tracks = value;
    }

    constructor(private storeService: StoreService) {
    }

    loadTracks() {
        this.storeService.load();
    }

    saveTracks() {
        this.storeService.save();
    }

    deleteTrack(index: number) {
        this.tracks = this.tracks.filter((it, i) => i !== index);
        this.saveTracks();
    }
}

import {Injectable} from '@angular/core';
import {Mpp} from './model';
import {TEST_TRACKS} from './test-tracks';

const MPP = 'mpp';

const DEFAULT: Mpp = {
    tracks: TEST_TRACKS
    // tracks: []
};

@Injectable()
export class StoreService {

    mpp: Mpp;

    save() {
        localStorage.setItem(MPP, JSON.stringify(this.mpp));
    }

    load() {
        const data = localStorage.getItem(MPP);
        this.mpp = DEFAULT;
        try {
            if (data) {
                const {mpp, changed} = this.convertMarkers(JSON.parse(data));
                this.mpp = mpp;
                if (changed) {
                    this.save();
                }
            }
        } catch (err) {
            console.error(err);
        }
    }

    private convertMarkers(mpp: Mpp) {

        const {tracks = []} = mpp;
        let changed = false;
        tracks
            .filter(({markers}) => markers && markers.length && typeof markers[0] === 'number')
            .forEach(track => {
                changed = true;
                track.markers = (track.markers as any).map(m => ({value: m}));
            });

        return {changed, mpp};
    }
}


import { downloadFile, fileDialog } from './util';
import type { Mpp } from '$model/model';
// import {TEST_TRACKS} from './test-tracks';

const MPP = 'mpp';

const DEFAULT: Mpp = {
  // tracks: TEST_TRACKS
  tracks: []
};

export class StoreService {

  mpp: Mpp = {};

  save() {
    localStorage.setItem(MPP, JSON.stringify(this.mpp));
  }

  async import(replacer: (countTracks) => Promise<boolean>) {

    const files = await fileDialog();

    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = e => {
        try {
          const { result } = e.target as any;
          const mpp = JSON.parse(result);
          if (typeof mpp === 'object' && Array.isArray(mpp.tracks)) {

            if (this.mpp.tracks.length === 0) {
              replacer = () => Promise.resolve(true);
            }

            replacer(mpp.tracks.length).then(replace => {
              if (replace === undefined) {
                return resolve(undefined);
              }
              if (replace) {
                this.mpp.tracks = mpp.tracks;
              } else {
                this.mpp.tracks.push(...mpp.tracks);
              }
              this.save();
              resolve(true);
            });

            return;
          }
        } catch {
          // ignore
        }
        resolve(false);
      };
      reader.readAsText(files[0]);
    });
  }

  export() {
    downloadFile('mpp.txt', localStorage.getItem(MPP));
  }

  load() {
    const data = localStorage.getItem(MPP);
    this.mpp = DEFAULT;
    try {
      if (data) {
        const { mpp, changed } = this.convertMarkers(JSON.parse(data));
        mpp.tracks = mpp.tracks || [];
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

    const { tracks = [] } = mpp;
    let changed = false;
    tracks
      .filter(({ markers }) => markers && markers.length && typeof markers[0] === 'number')
      .forEach(track => {
        changed = true;
        track.markers = (track.markers as any).map(m => ({ value: m }));
      });

    return { changed, mpp };
  }
}

export const storeService = new StoreService();

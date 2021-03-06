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

    addFileTrack(file: File, name?: string): { track: Track, index: number } {
        const fileName = name || file.name;
        let track = this.tracks.find(it => it.isFile && it.name === fileName);
        if (!track) {
            track = {
                name: fileName,
                videoUrl: '',
                markers: [],
                file,
                isFile: true
            };
            this.tracks.push(track);
            this.saveTracks();
        } else {
            track.file = file;
        }
        return {track, index: this.tracks.indexOf(track)};
    }

    removeAll() {
        this.storeService.mpp.tracks = [];
        this.storeService.save();
    }
}

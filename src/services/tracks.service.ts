import type { Track } from '$model/model';
import { StoreService, storeService } from './store.service';
import { cloneDeep } from 'lodash';

export class TracksService {

  get tracks(): Track[] {
    return this.storeService.mpp.tracks;
  }

  copy(index: number): Track {
    return cloneDeep(this.tracks[index]);
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
    console.log('saving tracks...');
    this.storeService.save();
  }

  deleteTrack(index: number) {
    this.tracks = this.tracks.filter((it, i) => i !== index);
    this.saveTracks();
  }

  addFileTrack(file: File, name?: string): void {
    const fileName = name || file.name;
    let track = this.tracks.find(it => it.isFile && it.name === fileName);
    if (!track) {
      track = {
        name: fileName,
        videoUrl: '',
        markers: [],
        file,
        isFile: true,
        filePath: (file as any).path // Electron
      };
      this.tracks.push(track);
      this.saveTracks();
    } else {
      track.file = file;
    }
  }

  removeAll() {
    this.storeService.mpp.tracks = [];
    this.storeService.save();
  }

  isFileLost({ isFile, file, filePath }: Track) {
    if (filePath) {
      return false;
    }
    return isFile && file && typeof file.slice !== 'function';
  }
}

export const tracksService = new TracksService(storeService);

import type { Track } from '$model/model';
import { StoreService, storeService } from './store.service';
import { cloneDeep } from 'lodash';
import { SoundtouchPlayer } from '$services/soundtouch/soundtouch-player';
import { fileExists } from '$services/electron';
import { toastController } from '$ionic/svelte';
import { _ } from 'svelte-i18n';
import { fileDialog } from '$services/util';
import type { Unsubscriber } from 'svelte/store';

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
        index: this.tracks.length,
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

  async openTrack(track: Track, onBeforeNavigate: () => Promise<void> = async () => undefined): Promise<boolean> {
    if (track.file) {
      await SoundtouchPlayer.getInstance();
    }

    return new Promise(resolve => {

      let subscription: Unsubscriber;
      subscription = _.subscribe(async format => {

        setTimeout(() => subscription());

        if (track.filePath && !await fileExists(track.filePath)) {
          const toast = await toastController.create({
            message: format('C_FILE_DOES_NOT_EXIST'),
            duration: 4000,
          });
          toast.present();
          resolve(false);
          return;
        }

        if (track.fileLost) {
          const files = await fileDialog({ accept: 'audio/*' });
          track.file = files[0];
          track.fileLost = false;
        }

        await onBeforeNavigate();

        history.pushState(null, null, `/track/${track.index}`);
      });
    });
  }

  removeAll() {
    this.storeService.mpp.tracks = [];
    this.storeService.save();
  }
}

export const tracksService = new TracksService(storeService);

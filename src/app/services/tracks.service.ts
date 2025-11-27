import type { Track } from '@model/model';
import { StoreService } from './store.service';
import { SoundtouchPlayer } from '@services/soundtouch/soundtouch-player';
import { fileExists } from '@services/electron';
import { fileDialog, xlate } from '@services/util';
import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular/standalone';

@Injectable({ providedIn: 'root' })
export class TracksService {

  router = inject(Router);

  translateService = inject(TranslateService);
  toastController = inject(ToastController);

  get tracks(): Track[] {
    return this.storeService.mpp.tracks;
  }

  copy(index: number): Track {
    return structuredClone(this.tracks[index]);
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

    const x = await xlate(this.translateService, ['C_FILE_DOES_NOT_EXIST']);

    if (track.filePath && !await fileExists(track.filePath)) {
      const toast = await this.toastController.create({
        message: x.C_FILE_DOES_NOT_EXIST,
        duration: 4000,
      });
      toast.present();
      return false;
    }

    if (track.fileLost) {
      const files = await fileDialog({ accept: 'audio/*' });
      track.file = files[0];
      track.fileLost = false;
    }

    await onBeforeNavigate();

    this.router.navigate(['/track', track.index]);

    return true;
  }

  removeAll() {
    this.storeService.mpp.tracks = [];
    this.storeService.save();
  }
}


import { inject, Injectable } from '@angular/core';
import type { Marker, Track } from '@model/model';
import { incrValue, PlayerService } from '@services/player.service';
import { TracksService } from '@services/tracks.service';
import { ModalController } from '@ionic/angular/standalone';
import { orderBy } from 'lodash-es';
import { MarkerDetailComponent } from '../components/marker-detail/marker-detail.component';

export const LONG_CLICK_SEEK_INTERVAL = 200;
export const LONG_CLICK_SEEK_SECONDS = 5;

@Injectable({ providedIn: 'root' })
export class TrackService {
  
  playerService = inject(PlayerService);
  tracksService = inject(TracksService);
  modalController = inject(ModalController);
  
  private longClickInterval;
  private saveTimer;

  setPlayerPropsFromTrack(track: Track) {
    this.playerService.setVolume(track.volume || 1, { emitChangeEvent: false });
    this.playerService.setPitch(track.pitch || 1);
    this.playerService.setTempo(track.tempo || 1);
  }

  backwardForward(back: boolean, amount = 1) {
    this.playerService.backwardForward(back, amount);
  }

  backwardForwardLong(back: boolean) {
    this.longClickInterval = setInterval(() => this.backwardForward(back, LONG_CLICK_SEEK_SECONDS),
      LONG_CLICK_SEEK_INTERVAL);
  }

  longClickEnd() {
    clearInterval(this.longClickInterval);
  }

  sortMarkers(track: Track) {
    track.markers = orderBy(track.markers, m => m.value);
  }

  resetVolume(track: Track) {
    this.playerService.setVolume(1, { emitChangeEvent: false });
    track.volume = 1;
    this.save();
  }

  resetPitch(track: Track) {
    this.playerService.setPitch(track.pitch = 1);
    this.save();
  }

  resetTempo(track: Track) {
    this.playerService.setTempo(track.tempo = 1);
    this.save();
  }

  onVolume(track: Track, volume: number, decr: boolean, amount = 0.05) {
    const vol = incrValue(volume || 1, decr, amount);
    this.playerService.setVolume(vol, { emitChangeEvent: false });
    track.volume = this.playerService.getVolume();
    this.save();
  }

  onPitch(track: Track, pitch: number, decr: boolean, amount = 0.01) {
    this.playerService.setPitch(track.pitch = incrValue(pitch || 1, decr, amount));
    this.save();
  }

  onTempo(track: Track, tempo: number, decr: boolean, amount = 0.01) {
    this.playerService.setTempo(track.tempo = incrValue(tempo || 1, decr, amount));
    this.save();
  }

  seekTo(seconds: number) {
    this.playerService.seekTo(seconds);
  }

  moveMarker(track: Track, activeMarker: number, back: boolean, amount = 1) {
    const { markers = [] } = track;
    const newMarker = incrValue(markers[activeMarker].value, back, amount);
    markers[activeMarker].value = newMarker;
    this.sortMarkers(track);
    const newActiveMarker = markers.findIndex(m => m.value === newMarker);
    this.seekToActiveMarker(track, newActiveMarker);
    this.tracksService.saveTracks();
  }

  seekToActiveMarker(track: Track, activeMarker: number) {
    if (activeMarker < 0) {
      return;
    }
    const marker = track.markers[activeMarker];
    if (marker) {
      this.playerService.seekTo(marker.value);
    }
  }

  async openMarkerDetail(track: Track, marker: Marker) {
    return new Promise(async resolve => {
      const modal = await this.modalController.create({
        component: MarkerDetailComponent,
        componentProps: {
          track,
          marker
        },
        cssClass: 'marker-detail',
        showBackdrop: true,
        backdropDismiss: false
      });

      modal.onDidDismiss().then(resolve);

      modal.present();
    });
  }

  save() {
    clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(() => this.tracksService.saveTracks(), 1000);
  }
}

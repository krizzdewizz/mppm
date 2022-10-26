import type { Playlist } from '$model/model';
import { StoreService, storeService } from './store.service';
import { cloneDeep } from 'lodash';

export class PlaylistService {

  get playlists(): Playlist[] {
    return this.storeService.mpp.playlists;
  }

  set playlists(value: Playlist[]) {
    this.storeService.mpp.playlists = value;
  }

  copy(index: number): Playlist {
    return cloneDeep(this.playlists[index]);
  }

  constructor(private storeService: StoreService) {
  }

  save() {
    this.storeService.save();
  }

  deletePlaylist(index: number) {
    this.playlists = this.playlists.filter((it, i) => i !== index);
    this.save();
  }
}

export const playlistService = new PlaylistService(storeService);

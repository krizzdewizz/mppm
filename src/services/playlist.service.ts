import type { Playlist } from '$model/model';
import { StoreService, storeService } from './store.service';
import { cloneDeep } from 'lodash';
import { writable } from 'svelte/store';
import { tracksService } from '$services/tracks.service';

export class PlaylistService {

  readonly activePlaylist = writable<number>();

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

  start(playlist: Playlist) {
    this.activePlaylist.set(playlist.index);
    tracksService.openTrack(tracksService.tracks[playlist.tracks[0]]);
  }
}

export const playlistService = new PlaylistService(storeService);

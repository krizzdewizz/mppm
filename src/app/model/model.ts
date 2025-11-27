export enum PlayerState {
  UNSTARTED = -1,
  ENDED = 0,
  PLAYING = 1,
  PAUSED = 2,
  BUFFERING = 3,
  VIDEO_CUED = 5
}

export interface Player {
  playVideo(): void;

  pauseVideo(): void;

  getPlayerState(): PlayerState;

  getDuration(): number;

  getVideoUrl(): string;

  getCurrentTime(): number;

  seekTo(seconds: number): void;

  setVolume(volume: number): void;

  setPitch(pitch: number): void;

  getPitch(): number;

  setTempo(tempo: number): void;

  getTempo(): number;

  isReady(): boolean;

  destroy(): void;
}

export interface Marker {
  title?: string;
  value: number;
}

export interface Track {
  name: string;
  index: number;
  videoUrl: string;
  lyricsUrl?: string;
  tabsUrl?: string;
  links?: string;
  markers: Marker[];
  file?: File;
  isFile?: boolean;
  filePath?: string; // opened in Electron
  pitch?: number;
  tempo?: number;
  volume?: number;
  fileLost?: boolean;
}

export interface Mpp {
  tracks?: Track[];
  playlists?: Playlist[];
}

export interface YTVideo {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
  };
}

export interface YTSearchResult {
  items: YTVideo[];
}

export interface Playlist {
  name: string;
  index: number;
  tracks: number[]; // indices in Mpp.tracks
}

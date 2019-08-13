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

    stopVideo(): void;

    getPlayerState(): PlayerState;

    getDuration(): number;

    getVideoUrl(): string;

    getCurrentTime(): number;

    seekTo(seconds: number, allowSeekAhead: boolean): void;

    destroy();
}

export interface Track {
    name: string;
    videoUrl: string;
    lyricsUrl?: string;
    tabsUrl?: string;
    links?: string;
    markers: { title?: string, value: number }[];
    file?: File;
}

export interface Mpp {
    tracks?: Track[];
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

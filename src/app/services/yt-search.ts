import { signal } from '@angular/core';
import type { YTVideo } from '@model/model';

export const selectedVideo = signal<YTVideo>(undefined);
export const openSearch = signal<boolean>(false);


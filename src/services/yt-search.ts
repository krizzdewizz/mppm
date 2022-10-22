import type { YTVideo } from '$model/model';
import { writable } from 'svelte/store';

export const selectedVideo = writable<YTVideo>();
export const openSearch = writable<boolean>(false);


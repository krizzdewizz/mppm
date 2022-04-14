import { YTVideo } from '../model/model';

let selectedVideo: YTVideo;

export function setSelectedVideo(video: YTVideo) {
  selectedVideo = video;
}

export function getSelectedVideo(): YTVideo {
  return selectedVideo;
}

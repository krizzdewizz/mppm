import type { Track } from '$model/model';
import { incrValue, playerService } from '$services/player.service';
import { tracksService } from '$services/tracks.service';

export const LONG_CLICK_SEEK_INTERVAL = 200;
export const LONG_CLICK_SEEK_SECONDS = 5;

let longClickInterval;
let saveTimer;

export function setPlayerPropsFromTrack(track: Track) {
  playerService.setVolume(track.volume || 1, { emitChangeEvent: false });
  playerService.setPitch(track.pitch || 1);
  playerService.setTempo(track.tempo || 1);
}

export function backwardForward(back: boolean, amount = 1) {
  playerService.backwardForward(back, amount);
}

export function backwardForwardLong(back: boolean) {
  longClickInterval = setInterval(() => backwardForward(back, LONG_CLICK_SEEK_SECONDS),
      LONG_CLICK_SEEK_INTERVAL);
}

export function longClickEnd() {
  clearInterval(longClickInterval);
}

export function sortMarkers(track: Track) {
  track.markers.sort((a, b) => a.value < b.value ? -1 : a.value > b.value ? 1 : 0);
}

export function resetVolume(track: Track) {
  playerService.setVolume(1, { emitChangeEvent: false });
  track.volume = 1;
  save();
}

export function resetPitch(track: Track) {
  playerService.setPitch(track.pitch = 1);
  save();
}

export function resetTempo(track: Track) {
  playerService.setTempo(track.tempo = 1);
  save();
}

export function onVolume(track: Track, volume: number, decr: boolean, amount = 0.05) {
  const vol = incrValue(volume || 1, decr, amount);
  playerService.setVolume(vol, { emitChangeEvent: false });
  track.volume = playerService.getVolume();
  save();
}

export function onVolumeLong(track: Track, volume: number, decr: boolean) {
  longClickInterval = setInterval(() => onVolume(track, volume, decr, 0.1), LONG_CLICK_SEEK_INTERVAL);
}

export function onPitch(track: Track, pitch: number, decr: boolean, amount = 0.01) {
  playerService.setPitch(track.pitch = incrValue(pitch || 1, decr, amount));
  save();
}

export function onPitchLong(track: Track, pitch: number, decr: boolean) {
  longClickInterval = setInterval(() => onPitch(track, pitch, decr, 0.05), LONG_CLICK_SEEK_INTERVAL);
}

export function onTempo(track: Track, tempo: number, decr: boolean, amount = 0.01) {
  playerService.setTempo(track.tempo = incrValue(tempo || 1, decr, amount));
  save();
}

export function onTempoLong(track: Track, tempo: number, decr: boolean) {
  longClickInterval = setInterval(() => onTempo(track, tempo, decr, 0.05), LONG_CLICK_SEEK_INTERVAL);
}

export function seekTo({ detail }: { detail: number }) {
  playerService.seekTo(detail);
}

export function save() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => tracksService.saveTracks(), 1000);
}

import type { Player } from '$model/model';
import { PlayerState } from '$model/model';
import { getIdFromURL } from './url-parser';
import { SoundtouchPlayer } from './soundtouch/soundtouch-player';
import { writable } from 'svelte/store';
import { readFile } from './electron';

export function incrValue(value: number, backward: boolean, amount = 1): number {
  if (backward) {
    amount *= -1;
  }
  return Math.max(0, value + amount);
}

declare const YT;

function youTubeIframeAPIReady() {
  return window[`mppmYouTubeIframeAPIReady`];
}

export class PlayerService {

  private player: Player;
  private soundtouchPlayer: SoundtouchPlayer;
  private volume = 1;

  playerStateChange = writable<PlayerState>();
  volumeChange = writable<number>();

  destroy() {
    if (this.player) {
      this.player.destroy();
      this.player = undefined;
    }
  }

  async openFile(file: File, filePath: string) {
    this.destroy();

    this.soundtouchPlayer = await SoundtouchPlayer.getInstance();

    this.player = this.soundtouchPlayer;

    if (filePath) {
      this.soundtouchPlayer.setBuffer(await readFile(filePath));
      return;
    }

    const reader = new FileReader();
    reader.onload = e => {
      const buffer = e.target.result as ArrayBuffer;
      this.soundtouchPlayer.setBuffer(buffer);
    };
    reader.readAsArrayBuffer(file);
  }

  open(url: string, playerElement: Element, width: number) {
    this.destroy();
    this.player = new YT.Player(playerElement, {
      videoId: getIdFromURL(url),
      width,
      height: '200',
      playerVars: { controls: 1, playsinline: 1 },
      events: {
        onStateChange: s => this.playerStateChange.set(s)
      }
    });
  }

  get isPlaying(): boolean {
    return this.player?.getPlayerState?.() === PlayerState.PLAYING;
  }

  playPause() {
    if (this.isPlaying) {
      this.player.pauseVideo();
    } else {
      this.player.playVideo();
    }
  }

  getCurrentTime() {
    return this.player?.getCurrentTime?.() || 0;
  }

  seekToStart() {
    this.player.seekTo(0);
  }

  backwardForward(backward: boolean, amount = 1) {
    this.player.seekTo(incrValue(this.player.getCurrentTime(), backward, amount));
  }

  seekTo(seconds: number) {
    this.player.seekTo(seconds);
  }

  isReady(): boolean {
    return this.isSoundtouchPlayer
        ? this.player?.isReady()
        : youTubeIframeAPIReady();
  }

  setVolume(volume: number, { emitChangeEvent = true }: { emitChangeEvent?: boolean } = {}) {
    volume = Number(Math.max(0, Math.min(1, volume)).toFixed(2));
    this.volume = volume;
    this.soundtouchPlayer?.setVolume?.(volume);
    if (!this.isSoundtouchPlayer) {
      this.player?.setVolume?.(volume * 100);
    }
    if (emitChangeEvent) {
      this.volumeChange.set(volume);
    }
  }

  getVolume(): number {
    return this.volume;
  }

  getPitch(): number {
    return this.player?.getPitch?.() || 1;
  }

  setPitch(pitch: number) {
    this.player?.setPitch?.(pitch);
  }

  getTempo(): number {
    return this.player?.getTempo?.() || 1;
  }

  setTempo(tempo: number) {
    this.player?.setTempo?.(tempo);
  }

  getDuration(): number {
    return this.player?.getDuration?.();
  }

  private get isSoundtouchPlayer(): boolean {
    return this.player === this.soundtouchPlayer;
  }
}

export const playerService = new PlayerService();

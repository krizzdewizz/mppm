import { ElementRef, EventEmitter, Injectable } from '@angular/core';
import { Player, PlayerState } from './model';
import { getIdFromURL } from './url-parser';
import { BehaviorSubject } from 'rxjs';
import { SoundtouchPlayer } from './soundtouch/soundtouch-player';

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

@Injectable()
export class PlayerService {

  private player: Player;
  private readonly soundtouchPlayer = new SoundtouchPlayer(new AudioContext());
  private volume = 1;

  private playerReady$ = new BehaviorSubject<boolean>(false);
  playerReady = this.playerReady$.asObservable();

  playerStateChange = new EventEmitter<void>();
  volumeChange = new EventEmitter<number>();

  init() {
    const ytCheck = setInterval(() => {
      if (youTubeIframeAPIReady()) {
        this.playerReady$.next(true);
        clearInterval(ytCheck);
      }
    }, 500);
  }

  destroy() {
    if (this.player) {
      this.player.destroy();
      this.player = undefined;
    }
  }

  openFile(file: File) {
    this.destroy();
    this.player = this.soundtouchPlayer;

    const reader = new FileReader();
    reader.onload = async (event: any) => {
      const buffer: ArrayBuffer = event.target.result;
      await this.soundtouchPlayer.setBuffer(buffer);
    };
    reader.readAsArrayBuffer(file);
  }

  open(url: string, playerElement: ElementRef, width: number) {
    this.destroy();
    this.player = new YT.Player(playerElement.nativeElement, {
      videoId: getIdFromURL(url),
      width,
      height: '200',
      playerVars: { controls: 1, playsinline: 1 },
      events: {
        onStateChange: () => this.playerStateChange.next()
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
    this.soundtouchPlayer?.setVolume(volume);
    if (!this.isSoundtouchPlayer) {
      this.player?.setVolume(volume * 100);
    }
    if (emitChangeEvent) {
      this.volumeChange.next(volume);
    }
  }

  getVolume(): number {
    return this.volume;
  }

  getPitch(): number {
    return this.player?.getPitch() || 1;
  }

  setPitch(pitch: number) {
    this.player?.setPitch(pitch);
  }

  getTempo(): number {
    return this.player?.getTempo() || 1;
  }

  setTempo(tempo: number) {
    this.player?.setTempo(tempo);
  }

  getDuration(): number {
    return this.player?.getDuration?.();
  }

  private get isSoundtouchPlayer(): boolean {
    return this.player === this.soundtouchPlayer;
  }
}

import { ElementRef, EventEmitter, Injectable } from '@angular/core';
import { Player, PlayerState } from './model';
import { getIdFromURL } from './url-parser';
import { BehaviorSubject } from 'rxjs';
import { ScrewAudioPlayer } from './pitch/screw-audio-player';

export function incrValue(value: number, backward: boolean, amount = 1): number {
  if (backward) {
    amount *= -1;
  }
  return Math.max(0, value + amount);
}

declare const YT;

@Injectable()
export class PlayerService {

  player: Player;
  screwAudioPlayer: ScrewAudioPlayer;

  private playerReady$ = new BehaviorSubject<boolean>(false);
  playerReady = this.playerReady$.asObservable();

  playerStateChange = new EventEmitter<void>();
  volumeChange = new EventEmitter<number>();

  volume = 1;

  init() {
    const ytCheck = setInterval(() => {
      if (window[`mppmYouTubeIframeAPIReady`]) {
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
    const player = new ScrewAudioPlayer(new AudioContext());
    this.screwAudioPlayer = player;
    this.player = player;

    const reader = new FileReader();
    reader.onload = async (event: any) => {
      try {
        const buffer = await player.decodeAudioData(event.target.result);
        player.setBuffer(buffer);
      } catch (err) {
        console.error('error while decoding', err);
      }
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
    return this.player && this.player.getPlayerState && this.player.getPlayerState() === PlayerState.PLAYING;
  }

  playPause() {
    if (this.isPlaying) {
      this.player.pauseVideo();
    } else {
      this.player.playVideo();
    }
  }

  getCurrentTime() {
    return this.player && this.player.getCurrentTime ? this.player.getCurrentTime() : 0;
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

  get ready(): boolean {
    return Boolean(this.player);
  }

  setVolume(volume: number, { emitChangeEvent = true }: { emitChangeEvent?: boolean } = {}) {
    volume = Number(Math.max(0, Math.min(1, volume)).toFixed(2));
    this.volume = volume;
    this.screwAudioPlayer?.setVolume(volume);
    if (this.screwAudioPlayer !== this.player) {
      this.player?.setVolume(volume * 100);
    }
    if (emitChangeEvent) {
      this.volumeChange.next(volume);
    }
  }

  getVolume(): number {
    return this.volume;
  }
}

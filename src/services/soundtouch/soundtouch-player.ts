import { PlayerState } from '$model/model';
import type { Player } from '$model/model';
import { createSoundTouchNode } from './createSoundTouchNode';

export class SoundtouchPlayer implements Player {

  private static instance;

  static async getInstance(): Promise<SoundtouchPlayer> {
    if (SoundtouchPlayer.instance) {
      return SoundtouchPlayer.instance;
    }

    const player = new SoundtouchPlayer(new AudioContext());
    await player.init();
    return SoundtouchPlayer.instance = player;
  }

  private state: PlayerState = PlayerState.PAUSED;
  private gain: GainNode;
  private soundtouch: any;

  private pitch = 1;
  private tempo = 1;
  private currentTime = 0;
  private ready = false;

  private constructor(private context: AudioContext) {
  }

  private async init() {
    this.gain = this.context.createGain();

    await this.context.audioWorklet.addModule('assets/soundtouch/soundtouch-worklet.js');
  }

  getPitch(): number {
    return this.pitch;
  }

  setPitch(pitch: number) {
    this.pitch = pitch;
    if (this.soundtouch) {
      this.soundtouch.pitch = pitch;
    }
  }

  getTempo(): number {
    return this.tempo;
  }

  setTempo(tempo: number) {
    this.tempo = tempo;
    if (this.soundtouch) {
      this.soundtouch.tempo = tempo;
    }
  }

  setBuffer(buffer: ArrayBuffer) {
    this.ready = false;

    this.stop();

    // @ts-ignore
    this.soundtouch = createSoundTouchNode(this.context, AudioWorkletNode, buffer, undefined);
    this.soundtouch.on('play', detail => this.currentTime = detail.timePlayed);
    this.soundtouch.on('initialized', () => {
      this.ready = true;
      this.soundtouch.pitch = this.pitch;
      this.soundtouch.tempo = this.tempo;
    });
  }

  playVideo(): void {
    this.gain.connect(this.context.destination);
    this.soundtouch.connectToBuffer();
    this.soundtouch.connect(this.gain);
    this.soundtouch.play();

    this.state = PlayerState.PLAYING;
  }

  pauseVideo(): void {
    this.gain.disconnect(this.context.destination);
    this.soundtouch.disconnectFromBuffer();
    this.soundtouch.pause();

    this.state = PlayerState.PAUSED;
  }

  getPlayerState() {
    return this.state;
  }

  getDuration(): number {
    return this.soundtouch?.duration;
  }

  getVideoUrl(): string {
    return undefined;
  }

  getCurrentTime(): number {
    return this.currentTime;
  }

  seekTo(seconds: number): void {
    this.soundtouch.percentagePlayed = (seconds * 100) / this.soundtouch.duration;
  }

  setVolume(volume: number) {
    this.gain.gain.value = volume;
  }

  isReady(): boolean {
    return this.ready;
  }

  private stop(): void {
    this.state = PlayerState.PAUSED;

    if (this.soundtouch) {
      try {
        this.soundtouch.disconnectFromBuffer();
        this.soundtouch.stop();
        delete this.soundtouch;
      } catch {
        // ignore
      }
    }
  }

  destroy() {
    this.stop();
  }
}


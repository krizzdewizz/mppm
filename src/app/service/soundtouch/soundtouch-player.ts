import { Player, PlayerState } from '../../model/model';
import createSoundTouchNode from './js/soundtouch-audio-node';

export class SoundtouchPlayer implements Player {

  private state: PlayerState = PlayerState.PAUSED;
  private gain: GainNode;
  private soundtouch: any;

  private pitch = 1;
  private tempo = 1;
  private currentTime = 0;
  private ready = false;

  constructor(private context: AudioContext) {
    this.init();
  }

  private async init() {
    this.gain = this.context.createGain();

    await this.context.audioWorklet.addModule('assets/soundtouch-worklet.js');
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

  async setBuffer(buffer: ArrayBuffer) {
    this.ready = false;

    this.soundtouch = createSoundTouchNode(this.context, AudioWorkletNode, buffer);
    this.soundtouch.on('play', detail => this.currentTime = detail.timePlayed);
    this.soundtouch.on('initialized', () => {
      this.ready = true;
      this.soundtouch.pitch = this.pitch;
      this.soundtouch.tempo = this.tempo;
    });
  }

  play() {
    this.gain.connect(this.context.destination);
    this.soundtouch.connectToBuffer();
    this.soundtouch.connect(this.gain);
    this.soundtouch.play();

    this.state = PlayerState.PLAYING;
  }

  pause() {
    this.gain.disconnect(this.context.destination);
    this.soundtouch.pause();

    this.state = PlayerState.PAUSED;
  }

  playVideo(): void {
    this.play();
  }

  pauseVideo(): void {
    this.pause();
  }

  stopVideo(): void {
    this.pause();
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

  destroy() {
    try {
      this.stopVideo();
    } catch {
      // ignore
    }
  }
}


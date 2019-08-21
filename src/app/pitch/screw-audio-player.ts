import { SimpleFilter, SoundTouch } from './vendor/soundtouch';
import { Player, PlayerState } from '../model';

const BUFFER_SIZE = 4096;

export class ScrewAudioPlayer implements Player {

    private scriptProcessor;
    private simpleFilter: SimpleFilter;
    private soundTouch: SoundTouch;
    private samples: Float32Array;
    private duration: number;
    private source;
    private state: PlayerState = PlayerState.PAUSED;
    private pitchVal: number;
    private tempoVal: number;

    constructor(private context: AudioContext) {
        // constructor(private emitter: EventEmitter<string>, private context: AudioContext) {
        this.scriptProcessor = this.context.createScriptProcessor(BUFFER_SIZE, 2, 2);
        this.scriptProcessor.onaudioprocess = e => {
            const l = e.outputBuffer.getChannelData(0);
            const r = e.outputBuffer.getChannelData(1);
            const framesExtracted = this.simpleFilter.extract(this.samples, BUFFER_SIZE);
            // if (framesExtracted === 0) {
            //     this.emitter.emit('stop');
            // }
            for (let i = 0; i < framesExtracted; i++) {
                l[i] = this.samples[i * 2];
                r[i] = this.samples[i * 2 + 1];
            }
        };

        this.soundTouch = new SoundTouch();
        this.pitch = 1;
        this.tempo = 1;

        this.duration = undefined;
    }

    get pitch() {
        return this.pitchVal;
    }

    set pitch(pitch) {
        this.pitchVal = pitch;
        this.soundTouch.pitch = pitch;
    }

    get tempo() {
        return this.tempoVal;
    }

    set tempo(tempo) {
        this.tempoVal = tempo;
        this.soundTouch.tempo = tempo;
    }

    decodeAudioData(data): Promise<AudioBuffer> {
        return this.context.decodeAudioData(data);
    }

    setBuffer(buffer: AudioBuffer) {
        const bufferSource = this.context.createBufferSource();
        bufferSource.buffer = buffer;

        this.samples = new Float32Array(BUFFER_SIZE * 2);
        this.source = {
            extract: (target, numFrames, position) => {
                // this.emitter.emit('state', {t: position / this.context.sampleRate});
                const l = buffer.getChannelData(0);
                const r = buffer.getChannelData(1);
                for (let i = 0; i < numFrames; i++) {
                    target[i * 2] = l[i + position];
                    target[i * 2 + 1] = r[i + position];
                }
                return Math.min(numFrames, l.length - position);
            },
        };
        this.simpleFilter = new SimpleFilter(this.source, this.soundTouch);

        this.duration = buffer.duration;
    }

    play() {
        this.state = PlayerState.PLAYING;
        this.scriptProcessor.connect(this.context.destination);
    }

    pause() {
        this.state = PlayerState.PAUSED;
        this.scriptProcessor.disconnect(this.context.destination);
    }

    seekPercent(percent) {
        if (this.simpleFilter !== undefined) {
            this.simpleFilter.sourcePosition = Math.round(
                percent / 100 * this.duration * this.context.sampleRate
            );
        }
    }

    // qq
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
        return this.duration;
    }

    getVideoUrl(): string {
        return undefined;
    }

    getCurrentTime(): number {
        return this.simpleFilter ? this.simpleFilter.sourcePosition / this.context.sampleRate : undefined;
    }

    seekTo(seconds: number): void {
        this.simpleFilter.sourcePosition = Math.round(seconds * this.context.sampleRate);
    }

    destroy() {
        try {
            this.stopVideo();
        } catch {
            // ignore
        }
    }
}


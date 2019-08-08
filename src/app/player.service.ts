import {ElementRef, EventEmitter, Injectable} from '@angular/core';
import {Player, PlayerState} from './model';
import {getIdFromURL} from './url-parser';
import {BehaviorSubject} from 'rxjs';

export function incrTime(time: number, backward: boolean, amount = 1): number {
    if (backward) {
        amount *= -1;
    }
    return Math.max(0, time + amount);
}

declare const YT;

@Injectable()
export class PlayerService {

    player: Player;

    private playerReady$ = new BehaviorSubject<boolean>(false);
    playerReady = this.playerReady$.asObservable();

    playerStateChange = new EventEmitter<void>();

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

    open(url: string, playerElement: ElementRef, width: number) {
        this.destroy();
        this.player = new YT.Player(playerElement.nativeElement, {
            videoId: getIdFromURL(url),
            width,
            height: '200',
            playerVars: {controls: 1, playsinline: 1},
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
        this.player.seekTo(0, true);
    }

    backwardForward(backward: boolean, amount = 1) {
        this.player.seekTo(incrTime(this.player.getCurrentTime(), backward, amount), true);
    }

    seekTo(seconds: number, allowSeekAhead: boolean) {
        this.player.seekTo(seconds, allowSeekAhead);
    }

    get ready(): boolean {
        return Boolean(this.player);
    }
}

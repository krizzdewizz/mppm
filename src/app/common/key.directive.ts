import {Directive, HostListener} from '@angular/core';
import {PlayerService} from '../player.service';
import {Events, MarkerAction} from './events';

@Directive({
    selector: '[mppmKey]'
})
export class KeyDirective {

    constructor(private playerService: PlayerService) {
    }

    @HostListener('document:keydown', ['$event'])
    onKeyDown(e: KeyboardEvent): boolean {

        if (!location.hash.includes('/track/')) {
            return;
        }

        const {marker} = Events;

        if (e.altKey || e.ctrlKey || e.shiftKey || !this.playerService.ready || marker.observers.length === 0) {
            return;
        }

        const kc = e[`keyCode`];
        // console.log(`cc=${kc}`);
        const ZERO = 48;
        const NINE = 57;
        const ZERO_NUMPAD = 96;
        const NINE_NUMPAD = 105;
        const numPadNum = kc >= ZERO_NUMPAD && kc <= NINE_NUMPAD;
        if (kc >= ZERO && kc <= NINE || numPadNum) {
            const numOff = numPadNum ? ZERO_NUMPAD : ZERO;
            const markerNumber = kc === ZERO || kc === ZERO_NUMPAD ? 10 : (kc - numOff);
            marker.next({action: MarkerAction.SET_ACTIVE, data: markerNumber - 1});
            return false;
        } else if (kc === 32) { // space
            this.playerService.playPause();
            return false;
        } else if (kc === 77 || kc === 65) { // m or a
            marker.next({action: MarkerAction.ADD});
            return false;
        } else if (kc === 13) { // return
            this.playerService.seekToStart();
            return false;
        } else if (kc === 37 || kc === 39) { // left or right
            this.playerService.backwardForward(kc === 37);
            return false;
        } else if (kc === 8) { // backspace
            marker.next({action: MarkerAction.SEEK_TO_ACTIVE});
            return false;
        } else if (kc === 38 || kc === 40) { // up or down
            marker.next({action: MarkerAction.MOVE_ACTIVE, data: kc === 38});
            return false;
        } else if (kc === 72) { // h
            marker.next({action: MarkerAction.TOGGLE_HELP});
            return false;
        }
    }
}

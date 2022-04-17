import { Directive, HostListener } from '@angular/core';
import { incrValue, PlayerService } from '../service/player.service';
import { Events } from './events';

@Directive({
  selector: '[mppmKey]'
})
export class KeyDirective {

  constructor(private playerService: PlayerService) {
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent): boolean | undefined {

    if (!location.hash.includes('/track/')) {
      return undefined;
    }

    if (e.altKey || e.ctrlKey || e.shiftKey || !this.playerService.isReady()) {
      return undefined;
    }

    const { marker } = Events;

    const key = e.key.toUpperCase();

    // console.log(`key=${key}`);

    if (key >= '0' && key <= '9') {
      const markerNumber = key === '0' ? 10 : Number(key);
      marker.next({ type: 'SET_ACTIVE', index: markerNumber - 1 });
      return false;
    } else if (key === ' ') {
      this.playerService.playPause();
      return false;
    } else if (key === 'M' || key === 'A') {
      marker.next({ type: 'ADD' });
      return false;
    } else if (key === 'ENTER') {
      this.playerService.seekToStart();
      return false;
    } else if (key === 'ARROWLEFT' || key === 'ARROWRIGHT') {
      this.playerService.backwardForward(key === 'ARROWLEFT');
      return false;
    } else if (key === 'BACKSPACE') {
      marker.next({ type: 'SEEK_TO_ACTIVE' });
      return false;
    } else if (key === 'ARROWUP' || key === 'ARROWDOWN') {
      marker.next({ type: 'MOVE_ACTIVE', back: key === 'ARROWUP' });
      return false;
    } else if (key === 'Q' || key === 'W') {
      this.playerService.setVolume(incrValue(this.playerService.getVolume(), key === 'Q', 0.05));
    } else if (key === 'H') {
      marker.next({ type: 'TOGGLE_HELP' });
      return false;
    } else if (key === 'L') {
      marker.next({ type: 'LOOP' });
      return false;
    }

    return undefined;
  }
}

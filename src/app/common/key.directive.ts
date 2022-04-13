import { Directive, HostListener } from '@angular/core';
import { PlayerService } from '../player.service';
import { Events, MarkerAction } from './events';

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

    const { marker } = Events;

    if (e.altKey || e.ctrlKey || e.shiftKey || !this.playerService.ready) {
      return undefined;
    }

    const key = e.key.toUpperCase();

    // console.log(`key=${key}`);
    if (key >= '0' && key <= '9') {
      const markerNumber = key === '0' ? 10 : Number(key);
      marker.next({ action: MarkerAction.SET_ACTIVE, data: markerNumber - 1 });
      return false;
    } else if (key === ' ') {
      this.playerService.playPause();
      return false;
    } else if (key === 'M' || key === 'A') {
      marker.next({ action: MarkerAction.ADD });
      return false;
    } else if (key === 'ENTER') {
      this.playerService.seekToStart();
      return false;
    } else if (key === 'ARROWLEFT' || key === 'ARROWRIGHT') {
      this.playerService.backwardForward(key === 'ARROWLEFT');
      return false;
    } else if (key === 'BACKSPACE') {
      marker.next({ action: MarkerAction.SEEK_TO_ACTIVE });
      return false;
    } else if (key === 'ARROWUP' || key === 'ARROWDOWN') {
      marker.next({ action: MarkerAction.MOVE_ACTIVE, data: key === 'ARROWUP' });
      return false;
    } else if (key === 'H') {
      marker.next({ action: MarkerAction.TOGGLE_HELP });
      return false;
    }

    return undefined;
  }
}

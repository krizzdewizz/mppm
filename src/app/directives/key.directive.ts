import { Directive, HostListener, inject } from '@angular/core';
import { appEvent } from '@services/app-event';
import { incrValue, PlayerService } from '@services/player.service';

@Directive({
  selector: '[mppmKey]'
})
export class KeyDirective {

  playerService = inject(PlayerService);

  @HostListener('document:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent): boolean | undefined {

    if (!location.hash.includes('/track/') || document.querySelector('ion-modal')) {
      return undefined;
    }

    if (e.altKey || e.ctrlKey || e.shiftKey || !this.playerService.isReady()) {
      return undefined;
    }

    const key = e.key.toUpperCase();

    // console.log(`key=${key}`);

    if (key >= '0' && key <= '9') {
      const markerNumber = key === '0' ? 10 : Number(key);
      appEvent.set({ type: 'SET_ACTIVE', index: markerNumber - 1 });
      return false;
    } else if (key === ' ') {
      this.playerService.playPause();
      return false;
    } else if (key === 'M' || key === 'A') {
      appEvent.set({ type: 'ADD' });
      return false;
    } else if (key === 'ENTER') {
      this.playerService.seekToStart();
      return false;
    } else if (key === 'ARROWLEFT' || key === 'ARROWRIGHT') {
      this.playerService.backwardForward(key === 'ARROWLEFT');
      return false;
    } else if (key === 'BACKSPACE') {
      appEvent.set({ type: 'SEEK_TO_ACTIVE' });
      return false;
    } else if (key === 'ARROWUP' || key === 'ARROWDOWN') {
      appEvent.set({ type: 'MOVE_ACTIVE', back: key === 'ARROWUP' });
      return false;
    } else if (key === 'Q' || key === 'W') {
      this.playerService.setVolume(incrValue(this.playerService.getVolume(), key === 'Q', 0.05));
    } else if (key === 'H') {
      appEvent.set({ type: 'TOGGLE_HELP' });
      return false;
    } else if (key === 'L') {
      appEvent.set({ type: 'LOOP' });
      return false;
    }

    return undefined;
  }
}

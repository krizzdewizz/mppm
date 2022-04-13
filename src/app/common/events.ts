import { EventEmitter } from '@angular/core';

export enum MarkerAction {
  ADD, SET_ACTIVE, SEEK_TO_ACTIVE, MOVE_ACTIVE, TOGGLE_HELP
}

export interface MarkerEvent {
  action: MarkerAction;
  data?;
}

export const Events = {
  marker: new EventEmitter<MarkerEvent>()
};

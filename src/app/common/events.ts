import { EventEmitter } from '@angular/core';

export interface AddMarkerEvent {
  type: 'ADD';
}

export interface MoveActiveMarkerEvent {
  type: 'MOVE_ACTIVE';
  back: boolean;
}

export interface SetActiveMarkerEvent {
  type: 'SET_ACTIVE';
  index: number;
}

export interface SeekToActiveMarkerEvent {
  type: 'SEEK_TO_ACTIVE';
}

export interface ToggleHelpEvent {
  type: 'TOGGLE_HELP';
}

export type MarkerEvent =
  AddMarkerEvent
  | MoveActiveMarkerEvent
  | SetActiveMarkerEvent
  | SeekToActiveMarkerEvent
  | ToggleHelpEvent
  ;

export const Events = {
  marker: new EventEmitter<MarkerEvent>()
};

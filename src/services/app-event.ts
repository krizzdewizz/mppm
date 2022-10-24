import { writable } from 'svelte/store';

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

export interface LoopEvent {
  type: 'LOOP';
}

export type AppEvent =
    AddMarkerEvent
    | MoveActiveMarkerEvent
    | SetActiveMarkerEvent
    | SeekToActiveMarkerEvent
    | ToggleHelpEvent
    | LoopEvent
    ;

export const appEvent = writable<AppEvent>();

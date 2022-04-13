import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mppm-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
})
export class AudioComponent {

  @Input()
  position: number;

  @Input()
  duration: number;

  @Output()
  seek = new EventEmitter<number>();

  onChange(e) {
    this.seek.next(e.target.value);
  }
}

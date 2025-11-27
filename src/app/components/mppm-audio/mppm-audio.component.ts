import { Component, input, output } from '@angular/core';

@Component({
  selector: 'mppm-audio',
  templateUrl: './mppm-audio.component.html',
  styleUrls: ['./mppm-audio.component.scss'],
})
export class MppmAudioComponent {

  duration = input(0);
  position = input(0);

  seek = output<number>();

  onChange(e) {
    this.seek.emit(Number(e.target.value));
  }
}

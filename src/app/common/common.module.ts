import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkerPipe } from './marker.pipe';
import { XlatePipe } from './xlate.pipe';
import { LongClickDirective } from './long-click.directive';
import { AudioComponent } from '../audio/audio.component';

@NgModule({
  declarations: [MarkerPipe, XlatePipe, LongClickDirective, AudioComponent],
  exports: [MarkerPipe, XlatePipe, LongClickDirective, AudioComponent],
  imports: [
    CommonModule
  ]
})
export class MppCommonModule {
}

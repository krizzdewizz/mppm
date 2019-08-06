import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarkerPipe} from './marker.pipe';
import {XlatePipe} from './xlate.pipe';
import {LongClickDirective} from './long-click.directive';


@NgModule({
    declarations: [MarkerPipe, XlatePipe, LongClickDirective],
    exports: [MarkerPipe, XlatePipe, LongClickDirective],
    imports: [
        CommonModule
    ]
})
export class MppCommonModule {
}

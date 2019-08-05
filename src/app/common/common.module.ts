import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarkerPipe} from '../marker.pipe';


@NgModule({
    declarations: [MarkerPipe],
    exports: [MarkerPipe],
    imports: [
        CommonModule
    ]
})
export class MppCommonModule {
}

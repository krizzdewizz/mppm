import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {TrackPage} from './track.page';
import {MppCommonModule} from '../common/common.module';

const routes: Routes = [
    {
        path: '',
        component: TrackPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        MppCommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
    ],
    declarations: [TrackPage]
})
export class TrackPageModule {
}

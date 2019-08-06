import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {AddTrackPage} from './add-track.page';
import {MppCommonModule} from '../common/common.module';

const routes: Routes = [
    {
        path: '',
        component: AddTrackPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        MppCommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [AddTrackPage]
})
export class AddTrackPageModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {MarkerDetailPage} from './marker-detail.page';
import {MppCommonModule} from '../common/common.module';

const routes: Routes = [
    {
        path: '',
        component: MarkerDetailPage
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
    declarations: [MarkerDetailPage]
})
export class MarkerDetailPageModule {
}

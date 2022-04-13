import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { YtSearchPage } from './yt-search.page';
import { MppCommonModule } from '../common/common.module';

const routes: Routes = [
  {
    path: '',
    component: YtSearchPage
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
  declarations: [YtSearchPage]
})
export class YtSearchPageModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrackPage } from './track.page';
import { YtPlayerComponent } from '../yt-player/yt-player.component';

const routes: Routes = [
  {
    path: '',
    component: TrackPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrackPage, YtPlayerComponent]
})
export class TrackPageModule {}

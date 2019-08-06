import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'track/:index', loadChildren: './track/track.module#TrackPageModule' },
  { path: 'add-track/:index', loadChildren: './add-track/add-track.module#AddTrackPageModule' },
  { path: 'marker-detail/:trackIndex/:markerIndex', loadChildren: './marker-detail/marker-detail.module#MarkerDetailPageModule' },  { path: 'yt-search', loadChildren: './yt-search/yt-search.module#YtSearchPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

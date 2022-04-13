import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'track/:index', loadChildren: () => import( './track/track.module').then(m => m.TrackPageModule) },
  { path: 'add-track/:index', loadChildren: () => import('./add-track/add-track.module').then(m => m.AddTrackPageModule) },
  {
    path: 'marker-detail/:trackIndex/:markerIndex',
    loadChildren: () => import('./marker-detail/marker-detail.module').then(m => m.MarkerDetailPageModule)
  },
  { path: 'yt-search', loadChildren: () => import( './yt-search/yt-search.module').then(m => m.YtSearchPageModule) },
  { path: 'info', loadChildren: () => import('./info/info.module').then(m => m.InfoPageModule) },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

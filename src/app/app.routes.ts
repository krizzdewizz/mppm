import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'info',
    loadComponent: () => import('./pages/info/info.page').then((m) => m.InfoPage),
  },
  {
    path: 'add-track/:trackIndex',
    loadComponent: () => import('./pages/add-track/add-track.page').then((m) => m.AddTrackPage),
  },
  {
    path: 'track/:trackIndex',
    loadComponent: () => import('./pages/track/track.page').then((m) => m.TrackPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

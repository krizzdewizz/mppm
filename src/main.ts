import App from './App.svelte';

import { setupIonicSvelte } from '$ionic/svelte';
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';
import { tracksService } from '$services/tracks.service';
import { App as IonicApp } from '@capacitor/app';
import { ytWakeup } from '$services/yt-download';

function initI18n() {
  register('en', () => import('./i18n/en.json'));
  register('de', () => import('./i18n/de.json'));

  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator()
  });
}

initI18n();

setupIonicSvelte();

IonicApp.addListener('backButton', () => history.back());

tracksService.loadTracks();

ytWakeup();

// if the page was pre rendered, we want to remove the pre rendered html
document.querySelector('[data-routify]')?.remove();
const app = new App({
  target: document.getElementById('app')
});

export default app;



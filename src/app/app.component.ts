import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { TracksService } from '@services/tracks.service';
import { addIcons } from 'ionicons';
import { accessibilityOutline, addOutline, arrowBackOutline, createOutline, downloadOutline, helpOutline, infiniteOutline, menuOutline, pauseOutline, playBackOutline, playForwardOutline, playOutline, playSkipBackOutline, removeOutline, searchOutline, settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'mppm-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {

  tracksService = inject(TracksService);

  constructor() {

    this.tracksService.loadTracks();

    addIcons({
      addOutline,
      menuOutline,
      searchOutline,
      downloadOutline,
      settingsOutline,
      helpOutline,
      pauseOutline,
      playOutline,
      playSkipBackOutline,
      playBackOutline,
      playForwardOutline,
      infiniteOutline,
      removeOutline,
      createOutline,
      arrowBackOutline
    });
  }
}

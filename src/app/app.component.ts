import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { TracksService } from './service/tracks.service';
import { PlayerService } from './service/player.service';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'mppm-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private platform: Platform,
    private tracksService: TracksService,
    private playerService: PlayerService
  ) {
    this.initializeApp();
  }

  async initializeApp() {

    if (this.platform.is('android')) {
      StatusBar.setBackgroundColor({ color: '8d1b6e' }).catch(err => void 0);
    }
  }

  ngOnInit(): void {
    this.playerService.init();
    this.tracksService.loadTracks();
  }
}

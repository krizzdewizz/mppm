import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { TracksService } from './tracks.service';
import { PlayerService } from './player.service';

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
    await this.platform.ready();
  }

  ngOnInit(): void {
    this.playerService.init();
    this.tracksService.loadTracks();
  }
}

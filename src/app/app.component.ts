import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { TracksService } from './service/tracks.service';
import { PlayerService } from './service/player.service';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'mppm-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private platform: Platform,
    private tracksService: TracksService,
    private playerService: PlayerService,
    private swUpdate: SwUpdate
  ) {
    (window as any).mppm = this;
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

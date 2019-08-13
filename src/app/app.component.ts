import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {TracksService} from './tracks.service';
import {PlayerService} from './player.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

    @ViewChild('audio', {static: true}) audio: ElementRef;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private tracksService: TracksService,
        private playerService: PlayerService
    ) {
        this.initializeApp();
    }

    async initializeApp() {
        await this.platform.ready();
        this.statusBar.styleDefault();
        this.splashScreen.hide();
    }

    ngOnInit(): void {
        this.playerService.audio = this.audio.nativeElement;
        this.playerService.init();
        this.tracksService.loadTracks();
    }
}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {StoreService} from './store.service';
import {MarkerPipe} from './common/marker.pipe';
import {TracksService} from './tracks.service';
import {PlayerService} from './player.service';
import {HttpClientModule} from '@angular/common/http';
import {XlatePipe} from './common/xlate.pipe';
import {KeyDirective} from './common/key.directive';

@NgModule({
    declarations: [AppComponent, KeyDirective],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        StoreService,
        TracksService,
        PlayerService,
        MarkerPipe,
        XlatePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

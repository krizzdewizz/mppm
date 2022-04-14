import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreService } from './service/store.service';
import { MarkerPipe } from './common/marker.pipe';
import { TracksService } from './service/tracks.service';
import { PlayerService } from './service/player.service';
import { HttpClientModule } from '@angular/common/http';
import { XlatePipe } from './common/xlate.pipe';
import { KeyDirective } from './common/key.directive';
import { YtDownloadService } from './service/yt-download.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, KeyDirective],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' })
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    StoreService,
    TracksService,
    PlayerService,
    MarkerPipe,
    YtDownloadService,
    XlatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

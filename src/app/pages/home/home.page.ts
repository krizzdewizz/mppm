import { Component, inject, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, Event } from '@angular/router';
import { ToastController, AlertController, ActionSheetController, IonHeader, IonToolbar, IonContent, IonSearchbar, IonList, IonItem, IonLabel, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { Track } from '@model/model';
import { StoreService } from '@services/store.service';
import { filterLower, waitFor, xlate } from '@services/util';
import { openSearch } from '@services/yt-search';
import { orderBy } from 'lodash-es';
import { isPlatform } from '@ionic/core';
import { TracksService } from '@services/tracks.service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LongClickDirective } from '@directives/long-click.directive';

@Component({
  selector: 'mppm-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [LongClickDirective, TranslatePipe, IonIcon, IonFabButton, IonFab, IonLabel, IonItem, IonList, IonSearchbar, IonHeader, IonToolbar, IonContent],
})
export class HomePage {

  router = inject(Router);
  storeService = inject(StoreService);
  tracksService = inject(TracksService);
  translate = inject(TranslateService);
  tracks: Track[] = [];
  filter = '';
  noTracks = true;

  actionSheetController = inject(ActionSheetController);
  alertController = inject(AlertController);
  toastController = inject(ToastController);

  @ViewChild(IonSearchbar)
  searchBar: IonSearchbar;

  constructor() {
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.updateTracks();
        if (isPlatform('desktop')) {
          waitFor(() => this.searchBar).then(sb => sb?.setFocus());
        }
      }
    });
  }

  updateTracks() {
    const all = this.tracksService.tracks;
    this.noTracks = all.length === 0;
    this.tracks = orderBy(filterLower(all, this.filter), t => t.name.toLowerCase());
  }

  onFilterChange(e) {
    this.filter = e.target.value;
    this.updateTracks();
  }

  async importt() {
    const replacer = countTracks => new Promise<boolean>(async resolve => {

      let replace: boolean;
      let alert: HTMLIonAlertElement;

      const doIt = rep => () => {
        replace = rep;
        alert.dismiss();
      };

      const x = await xlate(this.translate, ['C_IMPORT_TRACKS', 'C_REPLACE', 'C_APPEND'], { countTracks });

      alert = await this.alertController.create({
        header: x.C_IMPORT_TRACKS,
        buttons: [
          {
            text: x.C_REPLACE,
            handler: doIt(true)
          },
          {
            text: x.C_APPEND,
            handler: doIt(false)
          }
        ]
      });

      alert.onDidDismiss().then(() => resolve(replace));

      await alert.present();
    });

    return this.storeService.import(replacer);
  }

  async presentMenu() {

    const x = await xlate(this.translate, [
      'C_PLAYLISTS',
      'C_EXPORT',
      'C_IMPORT',
      'C_IMPORT_ERROR',
      'C_REMOVE_ALL_TRACKS',
      'C_INFO'
    ]);

    const options = {
      buttons: [
        this.noTracks ? undefined : {
          text: x.C_EXPORT,
          handler: () => {
            setTimeout(() => this.storeService.export());
          }
        },
        {
          text: x.C_IMPORT,
          handler: async () => {
            const ok = await this.importt();
            if (ok === undefined) {
              return;
            }
            if (ok) {
              this.updateTracks();
            } else {
              const toast = await this.toastController.create({
                message: x.C_IMPORT_ERROR,
                duration: 4000,
              });
              toast.present();
            }
          }
        },
        this.noTracks ? undefined : {
          text: x.C_REMOVE_ALL_TRACKS,
          handler: () => {
            this.tracksService.removeAll();
            this.updateTracks();
          }
        },
        {
          text: x.C_INFO,
          handler: () => this.router.navigate(['/info'])
        },
      ].filter(Boolean)
    };
    const actionsheet = await this.actionSheetController.create(options);

    actionsheet.present();
  }

  addTrack() {
    this.editTrack(-1);
  }

  editTrack(trackIndex: number, { openSearch: open = true }: { openSearch?: boolean; } = {}) {
    openSearch.set(open);
    this.router.navigate(['add-track', trackIndex]);
  }

  openTrack(track: Track) {
    this.tracksService.openTrack(track);
  }
}

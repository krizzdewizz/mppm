import { Component } from '@angular/core';
import { IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/angular/standalone';
import packageInfo from '../../../../package.json';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'mppm-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
  imports: [TranslatePipe, IonTitle, IonButtons, IonToolbar, IonHeader, IonContent, IonBackButton]
})
export class InfoPage {
  version = packageInfo.version;
}

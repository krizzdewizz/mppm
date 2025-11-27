import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonHeader, IonButton, IonToolbar, IonButtons, IonIcon, IonTitle, IonContent, IonInput } from '@ionic/angular/standalone';
import { Marker, Track } from '@model/model';
import { TranslatePipe } from '@ngx-translate/core';
import { mrkr } from '@services/mrkr';
import { TracksService } from '@services/tracks.service';
import { waitFor } from '@services/util';

@Component({
  selector: 'mppm-marker-detail',
  templateUrl: './marker-detail.component.html',
  styleUrls: ['./marker-detail.component.scss'],
  imports: [TranslatePipe, IonInput, IonContent, IonTitle, IonIcon, IonButtons, IonToolbar, IonHeader, IonButton],
})
export class MarkerDetailComponent implements OnInit {

  tracksService = inject(TracksService);
  modalController = inject(ModalController);

  mrkr = mrkr;

  track: Track;
  marker: Marker;

  title = '';

  @ViewChild('titleInput')
  titleInput: IonInput;

  save() {
    this.marker.title = this.title;
    this.tracksService.saveTracks();
    this.dismiss();
  }

  dismiss() {
    this.modalController.dismiss();
  }

  deleteMarker() {
    this.track.markers = this.track.markers.filter(it => it !== this.marker);
    this.tracksService.saveTracks();
    this.dismiss();
  }

  ngOnInit() {
    this.title = this.marker.title;
    waitFor(() => this.titleInput).then(inp => inp?.setFocus());
  }
}

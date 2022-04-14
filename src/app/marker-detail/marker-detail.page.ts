import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TracksService } from '../service/tracks.service';
import { Track } from '../model/model';
import { IonInput, NavController } from '@ionic/angular';

@Component({
  selector: 'mppm-marker-detail',
  templateUrl: './marker-detail.page.html',
  styleUrls: ['./marker-detail.page.scss'],
})
export class MarkerDetailPage implements OnInit, AfterViewInit {

  track: Track;
  trackIndex: number;
  marker: { title?: string; value: number };
  title: string;
  @ViewChild(IonInput) ionInput: IonInput;

  constructor(private activatedRoute: ActivatedRoute,
              private tracksService: TracksService,
              private nav: NavController) {
  }

  ngOnInit() {
    const { paramMap } = this.activatedRoute.snapshot;
    this.trackIndex = Number(paramMap.get('trackIndex'));
    this.track = this.tracksService.tracks[this.trackIndex];
    const markerIndex = Number(paramMap.get('markerIndex'));
    this.marker = this.track.markers[markerIndex];
    this.title = this.marker.title;
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.ionInput.setFocus(), 1000);
  }

  save() {
    this.marker.title = this.title;
    this.tracksService.saveTracks();
    this.nav.back();
  }
}

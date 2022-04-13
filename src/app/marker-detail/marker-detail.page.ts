import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TracksService } from '../tracks.service';
import { Track } from '../model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'mppm-marker-detail',
  templateUrl: './marker-detail.page.html',
  styleUrls: ['./marker-detail.page.scss'],
})
export class MarkerDetailPage implements OnInit {

  track: Track;
  trackIndex: number;
  marker: { title?: string; value: number };
  title: string;

  constructor(private activatedRoute: ActivatedRoute,
              private tracksService: TracksService,
              private nav: NavController) {
  }

  ngOnInit() {
    const paramMap = this.activatedRoute.snapshot.paramMap;
    this.trackIndex = Number(paramMap.get('trackIndex'));
    this.track = this.tracksService.tracks[this.trackIndex];
    const markerIndex = Number(paramMap.get('markerIndex'));
    this.marker = this.track.markers[markerIndex];
    this.title = this.marker.title;
  }

  save() {
    this.marker.title = this.title;
    this.tracksService.saveTracks();
    this.nav.back();
  }
}

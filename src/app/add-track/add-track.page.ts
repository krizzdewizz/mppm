import { Component, OnInit } from '@angular/core';
import { Track } from '../model';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { TracksService } from '../tracks.service';

@Component({
  selector: 'app-add-track',
  templateUrl: './add-track.page.html',
  styleUrls: ['./add-track.page.scss'],
})
export class AddTrackPage implements OnInit {

  track: Track;
  trackIndex: number;

  constructor(private activatedRoute: ActivatedRoute,
              private tracksService: TracksService,
              private nav: NavController) { }

  ngOnInit() {
    this.trackIndex = Number(this.activatedRoute.snapshot.paramMap.get('index'));
    this.track = { name: '', videoUrl: '', markers: [] };

    if (this.trackIndex !== -1) {
      const existing = this.tracksService.tracks[this.trackIndex];
      this.track.name = existing.name;
      this.track.videoUrl = existing.videoUrl;
    }
  }

  addTrack() {
    if (this.trackIndex !== -1) {
      const existing = this.tracksService.tracks[this.trackIndex];
      existing.name = this.track.name;
      existing.videoUrl = this.track.videoUrl;
    } else {
      this.tracksService.tracks.push({ ...this.track });
    }
    this.nav.back();
  }
}

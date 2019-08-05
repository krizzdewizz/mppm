import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Track } from '../model';
import { TracksService } from '../tracks.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.page.html',
  styleUrls: ['./track.page.scss'],
})
export class TrackPage implements OnInit {

  track: Track;

  constructor(
      private activatedRoute: ActivatedRoute,
      private tracksService: TracksService,
      private playerService: PlayerService) { }

  ngOnInit() {
    const trackIndex = Number(this.activatedRoute.snapshot.paramMap.get('index'));
    this.track = this.tracksService.tracks[trackIndex];
  }

  onLoadPlayer() {
    this.playerService.open(this.track.videoUrl);
  }
}

import { Component, OnInit } from '@angular/core';
import { Track } from '../model';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { TracksService } from '../tracks.service';
import { getSelectedVideo, setSelectedVideo } from '../yt-search/yt-search';

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

  ionViewWillEnter() {
    const selectedVideo = getSelectedVideo();
    if (selectedVideo) {
      this.track.videoUrl = selectedVideo.id.videoId;
      if (!this.track.name) {
        this.track.name = selectedVideo.snippet.title;
      }
      setSelectedVideo(undefined);
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
    this.tracksService.saveTracks();
    this.nav.back();
  }
}

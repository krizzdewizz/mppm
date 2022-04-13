import { Component, OnInit } from '@angular/core';
import { Track } from '../model';
import { NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { TracksService } from '../tracks.service';
import { getSelectedVideo, setSelectedVideo } from '../yt-search/yt-search';
import { YtDownloadService } from '../yt/yt-download.service';
import { getIdFromURL } from '../url-parser';
import { XlatePipe } from '../common/xlate.pipe';

@Component({
  selector: 'mppm-add-track',
  templateUrl: './add-track.page.html',
  styleUrls: ['./add-track.page.scss'],
})
export class AddTrackPage implements OnInit {

  track: Track;
  trackIndex: number;
  file: File;
  downloading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tracksService: TracksService,
    private nav: NavController,
    private toastController: ToastController,
    private xlate: XlatePipe,
    private ytDownloadService: YtDownloadService) {
  }

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
    let openTrack = false;
    if (this.file) {
      this.tracksService.addFileTrack(this.file, this.track.name);
      openTrack = true;
    } else {
      if (this.trackIndex !== -1) {
        const existing = this.tracksService.tracks[this.trackIndex];
        existing.name = this.track.name;
        existing.videoUrl = this.track.videoUrl;
      } else {
        openTrack = true;
        this.tracksService.tracks.push({ ...this.track });
      }
      this.tracksService.saveTracks();
    }

    setTimeout(() => {
      const newNav = this.nav.pop();
      if (openTrack) {
        newNav.then(() => this.nav.navigateRoot([`/track`, this.tracksService.tracks.length - 1]));
      }
    });
  }

  ytSearch() {
    this.nav.navigateForward('/yt-search');
  }

  onFileChanged($event) {
    this.file = $event.target.files[0];
    this.track.name = this.file.name;
  }

  async ytDownload(videoUrl: string) {
    if (this.downloading) {
      return;
    }

    this.downloading = true;
    const ok = await this.ytDownloadService.initiateDownload(getIdFromURL(videoUrl), this.track.name);
    if (!ok) {
      const toast = await this.toastController.create({
        message: this.xlate.transform('C_YT_DOWNLOAD_ERROR'),
        duration: 4000,
      });
      toast.present();
    }
    this.downloading = false;
  }
}

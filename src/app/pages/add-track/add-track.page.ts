import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, IonToolbar, IonHeader, IonButtons, IonBackButton, IonTitle, IonContent, IonInput, IonButton, IonProgressBar } from '@ionic/angular/standalone';
import { Track } from '@model/model';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { TracksService } from '@services/tracks.service';
import { getIdFromURL } from '@services/url-parser';
import { waitFor, xlate } from '@services/util';
import { initiateDownload } from '@services/yt-download';
import { selectedVideo } from '@services/yt-search';

@Component({
  selector: 'mppm-add-track',
  templateUrl: './add-track.page.html',
  styleUrls: ['./add-track.page.scss'],
  imports: [IonProgressBar, IonButton, IonInput, IonContent, TranslatePipe, IonTitle, IonButtons, IonHeader, IonToolbar, IonBackButton],
})
export class AddTrackPage implements OnInit {

  route = inject(ActivatedRoute);
  router = inject(Router);
  tracksService = inject(TracksService);
  translateService = inject(TranslateService);
  toastController = inject(ToastController);

  trackIndex: number;
  track: Track;
  
  downloading = false;
  file: File;
  
  @ViewChild('fileInput')
  fileInput: HTMLInputElement;

  @ViewChild('nameInput')
  nameInput: IonInput;
  
  ngOnInit() {

    this.trackIndex = Number(this.route.snapshot.params['trackIndex']);

    this.track = this.trackIndex >= 0
      ? this.tracksService.copy(this.trackIndex)
      : {
        index: this.tracksService.tracks.length,
        name: '',
        videoUrl: '',
        markers: []
      };

    const selVideo = selectedVideo();
    if (selVideo) {
      this.track.videoUrl = selVideo.id.videoId;
      this.track.name = this.track.name || selVideo.snippet.title;
      selectedVideo.set(undefined);
    }

    // if (openSearch()) {
    //   openSearch.set(false);
    //   setTimeout(() => this.ytSearch());
    //   return;
    // }

    document.body.addEventListener('dragover', this.onDragOver);
    document.body.addEventListener('drop', this.onDrop);

    waitFor(() => this.nameInput).then(inp => {
      if (inp && this.track?.name?.length === 0) {
        inp.setFocus();
      }
    });
  }

  ngOnDestroy() {
    document.body.removeEventListener('dragover', this.onDragOver);
    document.body.removeEventListener('drop', this.onDrop);
  }

  onDragOver = (e: DragEvent) => e.preventDefault();
  onDrop = (e: DragEvent) => {
    e.preventDefault();

    const dt = e.dataTransfer;
    if (!dt.files) {
      return;
    }

    this.file = dt.files[0];
    this.track.name = this.file.name;
    this.track.filePath = (this.file as any).path;
  };

  ytSearch() {
    this.router.navigate(['/yt-search']);
  }

  async ytDownload() {
    if (this.downloading) {
      return;
    }

    this.downloading = true;
    const ok = await initiateDownload(getIdFromURL(this.track.videoUrl), this.track.name);
    if (!ok) {

      const x = await xlate(this.translateService, 'C_YT_DOWNLOAD_ERROR');

      const toast = await this.toastController.create({
        message: x.C_YT_DOWNLOAD_ERROR,
        duration: 5000,
      });
      toast.present();
    }
    this.downloading = false;
  }

  addTrack() {
    let openTrack = false;
    if (this.file) {
      this.tracksService.addFileTrack(this.file, this.track.name);
      openTrack = true;
    } else {
      if (this.trackIndex >= 0) {
        this.tracksService.tracks[this.trackIndex] = this.track;
      } else {
        openTrack = true;
        this.tracksService.tracks.push(this.track);
      }
      this.tracksService.saveTracks();
    }

    history.back();

    setTimeout(() => {
      if (openTrack) {
        this.tracksService.openTrack(this.tracksService.tracks[this.tracksService.tracks.length - 1]);
      }
    }, 50);
  }

  onFileChanged(e) {
    this.file = e.target.files[0];
    this.track.name = this.track.name || this.file.name;
    this.track.filePath = (this.file as any).path;
  }

  deleteTrack() {
    this.tracksService.deleteTrack(this.trackIndex);
    history.back();
  }
}

import { Component } from '@angular/core';
import { Track } from '../model';
import { NavController } from '@ionic/angular';
import { TracksService } from '../tracks.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tracks: Track[];

  private filter = '';

  constructor(private tracksService: TracksService, private nav: NavController) {}

  ionViewWillEnter() {
    this.updateTracks();
  }

  private updateTracks() {
    const { tracks } = this.tracksService;
    const filterLower = this.filter.toLowerCase().trim();
    if (filterLower) {
      this.tracks = tracks.filter(track => track.name.toLowerCase().includes(filterLower));
    } else {
      this.tracks = tracks;
    }
  }

  onFilterChange(e) {
    this.filter = e.target.value;
    this.updateTracks();
  }

  deleteTrack(index: number) {
    this.tracksService.deleteTrack(index);
    this.updateTracks();
  }

  editTrack(index: number, item) {
    item.close();
    this.nav.navigateForward(`/add-track/${index}`);
  }
}

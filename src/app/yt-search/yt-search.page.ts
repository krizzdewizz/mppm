import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, debounceTime, distinctUntilChanged, mergeMap, tap } from 'rxjs/operators';
import { decode } from 'he';
import { IonSearchbar, NavController } from '@ionic/angular';
import { setSelectedVideo } from './yt-search';
import { YTSearchResult, YTVideo } from '../model/model';
import { of, Subscription } from 'rxjs';
import { MPPM_Q_BASE_URL } from '../service/yt-download.service';

const EMPTY_RESULT: YTSearchResult = { items: [] };

@Component({
  selector: 'mppm-yt-search',
  templateUrl: './yt-search.page.html',
  styleUrls: ['./yt-search.page.scss'],
})
export class YtSearchPage implements OnInit, AfterViewInit, OnDestroy {

  searchResult: YTSearchResult = EMPTY_RESULT;
  error: boolean;

  @ViewChild(IonSearchbar) ionSearchbar: IonSearchbar;

  private filterChange = new EventEmitter<string>();
  private filterChangeSubscription: Subscription;

  constructor(private http: HttpClient, private nav: NavController) {
  }

  ngOnInit() {
    this.filterChangeSubscription = this.filterChange.pipe(
      debounceTime(1200),
      distinctUntilChanged(),
      tap(() => delete this.error),
      mergeMap(searchTerm => {
        const url = `${MPPM_Q_BASE_URL}/ytsearch?q=${encodeURIComponent(searchTerm)}`;
        return this.http.get(url).pipe(
          catchError(() => {
            this.error = true;
            return of(EMPTY_RESULT);
          })
        );
      }),
    ).subscribe(this.setResult);
  }

  ngOnDestroy() {
    this.filterChangeSubscription?.unsubscribe();
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.ionSearchbar.setFocus(), 1000);
  }

  onFilterChange(e) {
    const val = e.target.value.trim();
    if (val) {
      this.filterChange.next(val);
    } else {
      this.searchResult = EMPTY_RESULT;
    }
  }

  private setResult = (result: YTSearchResult) => {
    result.items.forEach(({ snippet }) => snippet.title = decode(snippet.title));
    this.searchResult = result;
  };

  selectItem(item: YTVideo) {
    setSelectedVideo(item);
    this.nav.back();
  }

  async visitYt() {
    await this.nav.back({ animated: false });
    setTimeout(() => location.assign('https://youtube.com'), 300);
  }
}

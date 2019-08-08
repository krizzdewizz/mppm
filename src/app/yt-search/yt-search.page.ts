import { Component, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, debounceTime, distinctUntilChanged, flatMap, tap } from 'rxjs/operators';
import { decode } from 'he';
import { NavController } from '@ionic/angular';
import { setSelectedVideo } from './yt-search';
import { YTSearchResult, YTVideo } from '../model';
import { API_KEY } from './api';
import { of } from 'rxjs';

const API_URL = 'https://www.googleapis.com/youtube/v3/search';

const EMPTY_RESULT = { items: [] };

@Component({
  selector: 'app-yt-search',
  templateUrl: './yt-search.page.html',
  styleUrls: ['./yt-search.page.scss'],
})
export class YtSearchPage implements OnInit {

  searchResult: YTSearchResult = EMPTY_RESULT;

  private filterChange$ = new EventEmitter<string>();
  private filterChange = this.filterChange$.asObservable();
  private error: boolean;

  constructor(private http: HttpClient, private nav: NavController) {
  }

  ngOnInit() {
    this.filterChange.pipe(
        debounceTime(1200),
        distinctUntilChanged(),
        tap(() => delete this.error),
        flatMap(searchTerm => {
          const url = `${API_URL}?q=${encodeURIComponent(searchTerm)}&key=${API_KEY}&maxResults=20&part=snippet&type=video&alt=json`;
          return this.http.get(url)
              .pipe(
                  catchError(() => {
                    this.error = true;
                    return of(EMPTY_RESULT);
                  })
              );
        }),
    ).subscribe(this.setResult);
  }

  onFilterChange(e) {
    const val = e.target.value.trim();
    if (val) {
      this.filterChange$.next(val);
    } else {
      this.searchResult = EMPTY_RESULT;
    }
  }

  private setResult = (result: YTSearchResult) => {
    result.items.forEach(({ snippet }) => snippet.title = decode(snippet.title));
    this.searchResult = result;
  }

  selectItem(item: YTVideo) {
    setSelectedVideo(item);
    this.nav.back();
  }

  async visitYt() {
    await this.nav.back({ animated: false });
    setTimeout(() => location.assign('https://youtube.com'), 300);
  }
}

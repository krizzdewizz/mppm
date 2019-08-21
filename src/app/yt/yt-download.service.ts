import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, filter } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

function ytUrl(action: string, videoId) {
    return `https://agile-lake-41388.herokuapp.com/${action}?vid=${videoId}`;
}

export function downloadFile(videoId: string) {
    const frame = document.getElementById('ytreadyframe') as HTMLFrameElement;
    frame.src = ytUrl('ytget', videoId);
}

@Injectable()
export class YtDownloadService {
    constructor(private http: HttpClient) {
    }

    initateDownload(videoId: string): Observable<boolean> {
        return Observable.create(resolve => {
            this.http.get(ytUrl('yt', videoId))
                .subscribe(result => {
                    console.log('yt job successful', result);

                    let maxTries = 3;
                    let downloaded = false;
                    const RETRY_TIMEOUT = 8000;

                    const doIt = () => {
                        console.log('trying...');

                        this.http.get(ytUrl('ytready', videoId))
                            .pipe(
                                catchError(err => {
                                    console.log('not there yet', err);
                                    maxTries--;
                                    if (maxTries === 0) {
                                        console.log('abort ', videoId);
                                        resolve.next(false);
                                    } else {
                                        setTimeout(doIt, RETRY_TIMEOUT);
                                    }
                                    return of(false);
                                }),
                                filter(ok => ok !== false)
                            )
                            .subscribe(() => {
                                if (downloaded) {
                                    return;
                                }
                                downloaded = true;
                                console.log('downloading', videoId);
                                downloadFile(videoId);
                                resolve.next(true);
                            });
                    };

                    setTimeout(doIt, RETRY_TIMEOUT);

                }, () => resolve.next(false));
        });
    }
}

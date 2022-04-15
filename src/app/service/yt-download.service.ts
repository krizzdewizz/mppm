import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { downloadUrl, sleep } from './util';

// export const MPPM_Q_BASE_URL = 'http://localhost:5000';
export const MPPM_Q_BASE_URL = 'https://mppm-q.herokuapp.com';

function ytUrl(action: string, videoId: string) {
  return `${MPPM_Q_BASE_URL}/${action}?vid=${videoId}`;
}

@Injectable()
export class YtDownloadService {
  constructor(private http: HttpClient) {
  }

  async initiateDownload(videoId: string, fileName: string): Promise<boolean> {
    let jobResult;
    try {
      jobResult = await this.http.get(ytUrl('ytdownload', videoId)).toPromise();
    } catch (err) {
      console.log('yt job error', err);
      return false;
    }

    console.log('yt job successful', jobResult);

    const MAX_TRIES = 10;
    const RETRY_TIMEOUT = 8000;

    let ready = false;

    for (let i = 0; i < MAX_TRIES; i++) {

      await sleep(i === 0 ? 2000 : RETRY_TIMEOUT);

      try {
        console.log('trying...');
        await this.http.get(ytUrl('ytready', videoId)).toPromise();
        ready = true;
        break;
      } catch (err) {
        console.log('not there yet', err);
      }
    }

    if (ready) {
      console.log('downloading', videoId);
      downloadUrl(ytUrl('ytget', fileName || ''));
    } else {
      console.log(`stream not ready`, videoId);
    }

    return ready;
  }
}

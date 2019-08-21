import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { downloadUrl } from '../util';

function ytUrl(action: string, videoId) {
    return `https://agile-lake-41388.herokuapp.com/${action}?vid=${videoId}`;
}

function timed(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

@Injectable()
export class YtDownloadService {
    constructor(private http: HttpClient) {
    }

    async initateDownload(videoId: string): Promise<boolean> {
        let jobResult;
        try {
            jobResult = await this.http.get(ytUrl('yt', videoId)).toPromise();
        } catch (err) {
            console.log('yt job error', err);
            return false;
        }

        console.log('yt job successful', jobResult);

        const MAX_TRIES = 5;
        const RETRY_TIMEOUT = 8000;

        let ready = false;

        for (let i = 0; i < MAX_TRIES; i++) {

            await timed(i === 0 ? 2000 : RETRY_TIMEOUT);

            try {
                console.log('trying...');
                const ret: any = await this.http.get(ytUrl('ytready', videoId)).toPromise();
                ready = !ret.ytError;
                break;
            } catch (err) {
                console.log('not there yet', err);
            }
        }

        if (ready) {
            console.log('downloading', videoId);
            downloadUrl(ytUrl('ytget', videoId));
        } else {
            console.log(`stream not ready`, videoId);
        }

        return ready;
    }
}

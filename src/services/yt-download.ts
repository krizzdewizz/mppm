import { downloadUrl, sleep } from './util';

// export const MPPM_Q_BASE_URL = 'http://localhost:5000';
export const MPPM_Q_BASE_URL = 'https://mppm-q.herokuapp.com';

function ytUrl(action: string, videoId: string) {
  return `${MPPM_Q_BASE_URL}/${action}?vid=${videoId}`;
}

export async function initiateDownload(videoId: string, fileName: string): Promise<boolean> {
  let jobResult;
  try {
    jobResult = await fetch(ytUrl('ytdownload', videoId)).then(res => res.text());
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

    console.log('trying...');
    const status = await fetch(ytUrl('ytready', videoId)).then(res => res.status);
    ready = status === 200;
    if (ready) {
      break;
    }

    console.log('not there yet. status:', status);
  }

  if (ready) {
    console.log('downloading', videoId);
    downloadUrl(ytUrl('ytget', fileName || ''));
  } else {
    console.log(`stream not ready`, videoId);
  }

  return ready;
}

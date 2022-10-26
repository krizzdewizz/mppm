import { alertController } from '@ionic/core';
import type { AlertOptions } from '@ionic/core';
import { _ } from 'svelte-i18n';
import type { Unsubscriber } from 'svelte/store';

export function b64EncodeUnicode(str: string) {
  return btoa(
      encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode(Number(`0x${p1}`))));
}

export function downloadFile(file: string, content: string) {
  const a = document.createElement('a');
  a.href = `data:application/json;base64,${b64EncodeUnicode(content)}`;
  a.download = file;

  a.click();
}

export function downloadUrl(url: string) {
  const a = document.createElement('a');
  a.href = url;
  a.click();
}

// https://github.com/alnorris/file-dialog/blob/master/index.js
export function fileDialog({ multiple, accept }: { multiple?: boolean, accept?: string } = {}): Promise<FileList> {
  const input = document.createElement('input');
  if (multiple) {
    input.setAttribute('multiple', '');
  }
  if (accept) {
    input.setAttribute('accept', accept);
  }
  input.setAttribute('type', 'file');
  input.style.display = 'none';

  return new Promise(resolve => {
    input.addEventListener('change', () => resolve(input.files));
    input.click();
  });
}

export function sleep(millis: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, millis));
}

export function filterLower<T extends { name: string }>(all: T[], filter: string): T[] {
  const filterLower = filter.toLowerCase().trim();
  if (filterLower) {
    return all.filter(it => it.name.toLowerCase().includes(filterLower));
  }
  return all;
}

export async function waitFor<T>(get: () => T, maxMillis = 3000): Promise<T> {
  return new Promise(resolve => {
    const t1 = Date.now();

    const interval = setInterval(() => {
      const diff = Date.now() - t1;
      if (diff >= maxMillis) {
        clearInterval(interval);
        resolve(undefined);
      }

      const obj = get();
      if (obj) {
        clearInterval(interval);
        resolve(obj);
      }

    }, 200);
  });
}

export async function nameDialog({
                                   header,
                                   initialValue = '',
                                   okButtonText
                                 }: { header: string, initialValue?: string, okButtonText: string }): Promise<string> {

  return new Promise(async resolve => {
    let subscription: Unsubscriber;

    subscription = _.subscribe(async format => {

      const CANCEL_TEXT = format('C_CANCEL');
      const NAME_TEXT = format('C_NAME');

      const options: AlertOptions = {
        header: format(header),
        inputs: [
          {
            name: 'name',
            type: 'text',
            value: initialValue,
            placeholder: NAME_TEXT,
          }
        ],
        buttons: [
          {
            text: format(okButtonText),
            handler: ({ name }) => resolve(name)
          },
          {
            text: CANCEL_TEXT,
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => resolve(undefined),
          }
        ]
      };

      const alert = await alertController.create(options);
      alert.onDidDismiss().then(() => subscription());
      await alert.present();
      (await waitFor<HTMLInputElement>(() => document.querySelector('ion-alert .alert-input')))?.focus();
    });
  });
}

export function setIndices<T extends { index: number }>(list: T[]): T[] {
  return list.map((it, index) => ({
    ...it,
    index
  }));
}

export async function goto(url: string, sleepMillis = 0) {
  if (sleep) {
    await sleep(sleepMillis);
  }
  history.pushState(null, null, url);
}

export function goHome() {
  goto('/home');
}


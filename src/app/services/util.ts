import { firstValueFrom } from 'rxjs';
import { _, InterpolationParameters, TranslateService, Translation } from '@ngx-translate/core';

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
export function fileDialog({ multiple, accept }: { multiple?: boolean, accept?: string; } = {}): Promise<FileList> {
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

export function filterLower<T extends { name: string; }>(all: T[], filter: string): T[] {
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

export function setIndices<T extends { index: number; }>(list: T[]): T[] {
  return list.map((it, index) => ({
    ...it,
    index
  }));
}

export const xlate = async (translateService: TranslateService, ids: string | string[], params?: InterpolationParameters): Promise<Translation> => {
  return firstValueFrom(translateService.get(_(ids), params));
};

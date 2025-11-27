import { firstValueFrom } from 'rxjs';
import { _, InterpolationParameters, TranslateService, Translation } from '@ngx-translate/core';

export const b64EncodeUnicode = (str: string): string => {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode(Number(`0x${p1}`))));
}

export const downloadFile = (file: string, content: string): void => {
  const a = document.createElement('a');
  a.href = `data:application/json;base64,${b64EncodeUnicode(content)}`;
  a.download = file;

  a.click();
}

export const downloadUrl = (url: string): void => {
  const a = document.createElement('a');
  a.href = url;
  a.click();
}

// https://github.com/alnorris/file-dialog/blob/master/index.js
export const fileDialog = ({ multiple, accept }: { multiple?: boolean, accept?: string; } = {}): Promise<FileList> => {
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

export const sleep = (millis: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, millis));
}

export const filterLower = <T extends { name: string; }>(all: T[], filter: string): T[] => {
  const filterLower = filter.toLowerCase().trim();
  if (filterLower) {
    return all.filter(it => it.name.toLowerCase().includes(filterLower));
  }
  return all;
}

export const waitFor = <T>(get: () => T, maxMillis = 3000): Promise<T> => {
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

export const setIndices = <T extends { index: number; }>(list: T[]): T[] => {
  return list.map((it, index) => ({
    ...it,
    index
  }));
}

export const xlate = async (translateService: TranslateService, ids: string | string[], params?: InterpolationParameters): Promise<Translation> => {
  return firstValueFrom(translateService.get(_(ids), params));
};

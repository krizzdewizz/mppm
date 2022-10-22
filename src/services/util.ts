export function b64EncodeUnicode(str: string) {
  return btoa(
      encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode(Number(`0x${p1}`))));
}

export function downloadFile(file: string, content: string) {
  const a = document.createElement('a');
  a.href = `data:application/json;base64,${b64EncodeUnicode(content)}`;
  a.download = file;

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function downloadUrl(url: string) {
  const a = document.createElement('a');
  a.href = url;

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
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
  document.body.appendChild(input);

  return new Promise(resolve => {
    input.addEventListener('change', () => {
      resolve(input.files);
      document.body.removeChild(input);
    });

    // Simulate click event
    const evt = document.createEvent('MouseEvents');
    evt.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    input.dispatchEvent(evt);
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
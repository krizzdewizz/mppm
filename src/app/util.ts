export function b64EncodeUnicode(str: string) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode(Number(`0x${p1}`))));
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
export function fileDialog({multiple, accept}: { multiple?: boolean, accept?: string } = {}): Promise<FileList> {
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

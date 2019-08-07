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

// https://github.com/alnorris/file-dialog/blob/master/index.js
export function fileDialog(...args): Promise<FileList> {
    const input = document.createElement('input');

    // Set config
    if (typeof args[0] === 'object') {
        if (args[0].multiple === true) {
            input.setAttribute('multiple', '');
        }
        if (args[0].accept !== undefined) {
            input.setAttribute('accept', args[0].accept);
        }
    }
    input.setAttribute('type', 'file');

    // IE10/11 Addition
    input.style.display = 'none';
    input.setAttribute('id', 'hidden-file');
    document.body.appendChild(input);

    // Return promise/callvack
    return new Promise((resolve, reject) => {
        input.addEventListener('change', e => {
            resolve(input.files);
            const lastArg = args[args.length - 1];
            if (typeof lastArg === 'function') {
                lastArg(input.files);
            }

            // IE10/11 Addition
            document.body.removeChild(input);
        });

        // Simluate click event
        const evt = document.createEvent('MouseEvents');
        evt.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
        input.dispatchEvent(evt);
    });
}

const fs = require('fs');

function replaceInFile(path, replacer) {
    const content = String(fs.readFileSync(path));
    fs.writeFileSync(path, replacer(content));
}

const version = require('../package.json').version;

replaceInFile('src/app/info/info.page.html', s => s.replace('__VERSION__', version));

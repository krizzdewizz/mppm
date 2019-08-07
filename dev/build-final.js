const fs = require('fs');
const cpx = require('cpx');

fs.renameSync('www/index.html', 'www/app.html');
cpx.copySync('src/index-prod.html', 'www');
fs.renameSync('www/index-prod.html', 'www/index.html');

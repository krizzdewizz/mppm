const cpx = require('cpx');

cpx.copySync(
  'node_modules/@soundtouchjs/audio-worklet/dist/soundtouch-worklet.js',
  'src/assets');

cpx.copySync(
  'node_modules/@soundtouchjs/audio-worklet/dist/soundtouch-audio-node.js',
  'src/app/service/soundtouch/js');

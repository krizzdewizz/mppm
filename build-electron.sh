#!/bin/bash

npm run build
rm -rf .electron-pack
mkdir .electron-pack
cp package-electron.json .electron-pack/package.json
cp main.cjs .electron-pack
cp preload.cjs .electron-pack
cp -R dist .electron-pack
cd .electron-pack
npm i
cd ..

if [[ -v COMSPEC ]]; then
  npx electron-packager .electron-pack --overwrite --icon src/static/assets/icon/favicon.ico
else
  npx electron-packager .electron-pack --overwrite --icon src/static/assets/icon/favicon.icns
fi


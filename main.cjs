const {app, ipcMain, BrowserWindow, Menu, nativeTheme} = require('electron');
const path = require('path');
const fs = require('fs');

const serve = require('electron-serve');
const loadURL = serve({directory: 'dist/client'});

const appName = require('./package.json').productName;

app.name = appName;

async function handleReadFile(e, filePath) {
  return fs.readFileSync(filePath);
}

async function handleFileExists(e, filePath) {
  return fs.existsSync(filePath);
}

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 500,
    height: 700,
    backgroundColor: nativeTheme.shouldUseDarkColors ? '#222428' : undefined,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      nodeIntegration: true,
      enableBlinkFeatures: "CSSColorSchemeUARendering",
    },
  });

  // mainWindow.webContents.openDevTools()

  if (process.env.MPPM_DEV) {
    mainWindow.loadURL('http://localhost:5173/');
  } else {
    loadURL(mainWindow);
  }
}

app.whenReady().then(() => {
  createWindow();

  ipcMain.handle('app:readFile', handleReadFile);
  ipcMain.handle('app:fileExists', handleFileExists);

  app.on('activate', function() {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

const isMac = process.platform === 'darwin';

const template = [
  // { role: 'appMenu' }
  ...(isMac ? [
    {
      label: app.name,
      submenu: [
        {role: 'about'},
        {type: 'separator'},
        {role: 'services'},
        {type: 'separator'},
        {role: 'hide'},
        {role: 'hideOthers'},
        {role: 'unhide'},
        {type: 'separator'},
        {role: 'quit'},
      ],
    }] : [])
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

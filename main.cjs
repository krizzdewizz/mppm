const {app, ipcMain, BrowserWindow, Menu} = require('electron');
const path = require('path');
const fs = require('fs');

const serve = require('electron-serve');
const loadURL = serve({directory: '.'});

async function handleReadFile(e, filePath) {
  return fs.readFileSync(filePath);
}

async function handleFileExists(e, filePath) {
  return fs.existsSync(filePath);
}

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL('http://localhost:5173/');
  // loadURL(mainWindow);
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
    }] : []),
  // { role: 'fileMenu' }
  {
    label: 'File',
    submenu: [
      isMac ? {role: 'close'} : {role: 'quit'},
    ],
  },
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

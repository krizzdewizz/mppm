const { app, ipcMain, BrowserWindow, Menu, nativeTheme } = require('electron');
const path = require('path');
const fs = require('fs');
const server = require('node-http-server');
const freePort = require("find-free-port")

async function serve(port) {
  return new Promise(resolve => {
    server.deploy({
        port,
        root: 'dist/client'
      },
      serverReady
    );

    function serverReady(server) {
      console.log(`server running on port ${server.config.port}`);
      resolve();
    }
  })
}

const appName = require('./package.json').productName;

app.name = appName;

async function handleReadFile(e, filePath) {
  return fs.readFileSync(filePath);
}

async function handleFileExists(e, filePath) {
  return fs.existsSync(filePath);
}

async function createWindow() {
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

  mainWindow.webContents.openDevTools()
  
  let port;
  if (process.env.MPPM_DEV) {
    port = 5173;
  } else {
    [port] = await freePort(8000);
    await serve(port);
  }
  mainWindow.loadURL(`http://localhost:${port}/`);
}

app.whenReady().then(async () => {
  await createWindow();

  ipcMain.handle('app:readFile', handleReadFile);
  ipcMain.handle('app:fileExists', handleFileExists);

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', function () {
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
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' },
      ],
    }] : [])
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

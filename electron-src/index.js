const path = require("path");
const { app, BrowserWindow, ipcMain, globalShortcut } = require("electron");
const fs = require("fs");

let win;

function createWindow() {
  const isDev = !app.isPackaged;

  win = new BrowserWindow({
    width: 550,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.removeMenu();

  if (isDev) {
    win.loadURL("http://localhost:5173"); 
  } else {
    win.loadFile(path.join(__dirname, "../react-ui/dist/index.html"));
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  // Register shortcut to toggle DevTools
  globalShortcut.register("Control+Shift+I", () => {
    if (win) {
      win.webContents.toggleDevTools();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
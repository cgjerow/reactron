const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')
var client = require('electron-connect').client;
let win

var createWindow = function () {
  win = new BrowserWindow();
  win.loadURL(url.format({
  pathname: path.join(__dirname, 'index.html'),
  protocol: 'file:',
  slashes: true
  }));
  client.create(win);
}

app.on('ready', () => {

  createWindow()
})

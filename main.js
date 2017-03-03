const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')
const elemon = require('elemon')
let win

var createWindow = function () {
  win = new BrowserWindow();
  win.loadURL(url.format({
  pathname: path.join(__dirname, 'index.html'),
  protocol: 'file:',
  slashes: true
  }))
}

app.on('ready', () => {

  createWindow()

  // Elemon live reload setup
  elemon({
    app: app,
    mainfile: 'main.js',
    bws: [
      {bw: win, res: []}
    ]
  })
})

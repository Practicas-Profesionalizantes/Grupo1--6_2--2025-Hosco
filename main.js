const { app, BrowserWindow } = require('electron')
const path = require('path');

const createWindow = () => {
    const window = new BrowserWindow({
        width: 1400,
        heigth: 800,
        minWidth: 1400,
        minHeight: 800,
        autoHideMenuBar: true,
        webPreferences: {
            allowRunningInsecureContent: true,
        }
    })
    window.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})

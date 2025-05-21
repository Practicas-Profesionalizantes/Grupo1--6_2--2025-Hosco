const { app, BrowserWindow } = require('electron')
const path = require('path');

const createWindow = () => {
    const window = new BrowserWindow({
        width: 1000,
        heigth: 800,
        minWidth: 800,
        minHeight: 600,
        autoHideMenuBar: true
    })
    window.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
    
})

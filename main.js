/**
 * Electron JS: HTML, CSS, JS based Multi-platform Desktop Apps
 * Main Process - Browser Window
 * Renderer Process - Web Page Process
 */

/// constants...
const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

/// global win object
let win;

/// browser window fn
function createWindow() {

    /// set the browser props
    win = new BrowserWindow({ width: 800, height: 600 });

    /// Load the web page
    win.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file",
        slashes: true
    }));

    /// open dev tools
    win.webContents.openDevTools();

    /// on close event, make the win obj null
    win.on("closed", () => {
        win = null;
    });
}

/// run the app
app.on("ready", createWindow);

/// on close
app.on("window-all-closed", () => {

    /// for the MAC process
    if (process.platform !== "darwin") {
        app.quit();
    }
});



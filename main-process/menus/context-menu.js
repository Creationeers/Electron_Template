const {
    BrowserWindow,
    Menu,
    MenuItem,
    ipcMain,
    app
} = require('electron')

const menu = new Menu()
menu.append(new MenuItem({ label: 'First Item' }))
menu.append(new MenuItem({ label: 'Second Item' }))
menu.append(new MenuItem({ type: 'separator' }))
menu.append(new MenuItem({ label: 'Checkbox Item', type: 'checkbox', checked: false }))

app.on('browser-window-created', (event, win) => {
    console.log("Test")
    win.webContents.on('context-menu', (e, params) => {
        menu.popup(win, params.x, params.y)
    })
})

ipcMain.on('show-context-menu',(event) => {
    const win = BrowserWindow.fromWebContents(event.sender)
    menu.popup(win)
})

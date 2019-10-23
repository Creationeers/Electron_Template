const {app, dialog, globalShortcut} = require('electron');

app.on('ready', () => {
    globalShortcut.register('CommandOrControl+Alt+K', () => {
        dialog.showMessageBox({
            message: "This is the message",
            type: 'info',
            details: 'Global shortcut was successfully executed!',
            buttons: ['OK']
        })
    })
})

app.on('will-quit', () => {
    globalShortcut.unregisterAll();
})
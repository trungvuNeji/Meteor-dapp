const electron = require('electron');
const url = require('url');
const path = require('path');

const {
  app,
  BrowserWindow,
  Menu,
  ipcMain
} = electron;

// SET ENV
process.env.NODE_ENV = 'production';

let mainWindow;
// let addWindow;

// Listen for app to be ready
app.on('ready', function() {
  // Create new window, default style
  mainWindow = new BrowserWindow({});
  // Load html into window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/app/client/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  //Quit app when closed
  mainWindow.on('close', function() {
    app.quit();
  });

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Insert menu
  Menu.setApplicationMenu(mainMenu);
});

// //Catch item:add
// ipcMain.on('item:add', function(e, item) {
//   mainWindow.webContents.send('item:add', item);
//   addWindow.close();
// });

// Create menu template
const mainMenuTemplate = [{
  label: 'File',
  submenu: [{
      label: 'Add Item',
      click() {
        // createAddWindow();
      }
    },
    {
      label: 'Clear Items',
      click() {
        mainWindow.webContents.send('item:clear');
      }
    },
    {
      label: 'Quit',
      // Shortcut keys
      accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
      click() {
        app.quit();
      }
    }
  ]
}];

// If mac, add empty object to menu
if (process.platform == 'darwin') {
  mainMenuTemplate.unshift({});
}

// Add developer tools item if not in prod

if (process.env.NODE_ENV !== 'production') {
  mainMenuTemplate.push({
    label: 'Developer Tools',
    submenu: [{
        label: 'Toggle DevTools',
        accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      },
      {
        role: 'reload'
      }
    ]
  })
};
import { dialog, getCurrentWindow } from '@electron/remote';

export default {
  minimize() {
    getCurrentWindow()?.minimize();
  },

  minimizeToTray() {
    getCurrentWindow()?.hide();
  },

  toggleMaximize() {
    const win = getCurrentWindow();

    if (win?.isMaximized()) return win.unmaximize();
    win?.maximize();
  },

  close() {
    getCurrentWindow()?.close();
  },

  showOpenDialogSync(...params: Parameters<typeof dialog.showOpenDialogSync>) {
    return dialog.showOpenDialogSync(...params);
  },

  showMessageBoxSync(...params: Parameters<typeof dialog.showMessageBoxSync>) {
    return dialog.showMessageBoxSync(...params);
  },

  send(channel: string, ...args: any[]) {
    getCurrentWindow().webContents.send(channel, args);
  },
};

import { ipcMain } from 'electron';
import { saveFile, type SaveFile, saveIniFile } from './actions';

const handlers = {
  'fs:save-file': (payload: SaveFile) => saveFile(payload),
  'fs:save-ini-file': (payload: SaveFile) => saveIniFile(payload),
};

export const handleFileSystem = () => {
  for (const [key, handler] of Object.entries(handlers)) {
    ipcMain.handle(key, (_, data) => handler(data));
  }
};

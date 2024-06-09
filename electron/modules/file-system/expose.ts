import { ipcRenderer } from 'electron';
import type { SaveFile, saveFile, saveIniFile } from './actions';

export default {
  saveFile: (payload: SaveFile): ReturnType<typeof saveFile> =>
    ipcRenderer.invoke('fs:save-file', payload),
  saveIniFile: (payload: SaveFile): ReturnType<typeof saveIniFile> =>
    ipcRenderer.invoke('fs:save-ini-file', payload),
};

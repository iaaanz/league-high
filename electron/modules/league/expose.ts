import { ipcRenderer } from 'electron';
import type { getProfile } from './api';

export default {
  getProfile: (): ReturnType<typeof getProfile> => ipcRenderer.invoke('league:get-profile'),
  onUnlistenClient: (callback) =>
    ipcRenderer.on('league:unlisten-client', (_event, value) => callback(value)),
  onListenCredentials: (callback) =>
    ipcRenderer.on('league:listen-credentials', (_event, value) => callback(value)),
};

import { ipcMain } from 'electron';
import { getProfile } from './api';

const handlers = {
  'league:get-profile': (payload) => getProfile(),
};

export const handleLeagueApi = () => {
  for (const [key, handler] of Object.entries(handlers)) {
    ipcMain.handle(key, (_, data) => handler(data));
  }
};

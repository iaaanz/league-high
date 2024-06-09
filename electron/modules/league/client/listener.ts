import { win } from '../../../main';
import { getCurrentSummoner } from '../api';

export const startClientListener = () => {
  if (leagueClientListener) return;
  leagueClientListener = setInterval(async () => await handlerLeagueClient(), 5000);
  console.log('Initializing client listener...');
};

export const stopClientListener = async () => {
  if (!leagueClientListener) return;
  clearInterval(leagueClientListener);
  leagueClientListener = undefined;
  console.log('unlistening for client');
  win.webContents.send('league:unlisten-client');
};

const handlerLeagueClient = async () => {
  try {
    await getCurrentSummoner();
    stopClientListener();
    console.log('client started!');
  } catch (error) {
    console.log('client not started', error);
  }
};

let leagueClientListener: NodeJS.Timeout;

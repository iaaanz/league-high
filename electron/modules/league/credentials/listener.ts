import { win } from '../../../main';
import { listenFile } from '../../file-system/actions';
import { startClientListener } from '../client/listener';
import { credentialsFile } from './create';

export const startCredentialsListener = () => {
  if (leagueCredentialsListener) return;
  console.log('Initializing credentials listener...');
  leagueCredentialsListener = listenFile(
    credentialsFile,
    { every: 1000 },
    handlerLeagueCredentials
  );
  win.webContents.send('league:listen-credentials');
};

export const stopCredentialsListener = async () => {
  if (!leagueCredentialsListener) return;
  clearInterval(leagueCredentialsListener);
  leagueCredentialsListener = undefined;
  console.log('unlistening for credentials');
  startClientListener();
};

const handlerLeagueCredentials = async (err: Error | null, file: Buffer) => {
  if (err || !file) {
    console.log('credentials file not found');
    return;
  }

  await stopCredentialsListener();
  console.log('credentials file found');
};

export let leagueCredentialsListener: NodeJS.Timeout;

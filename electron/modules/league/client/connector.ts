import type { BaseCredentials } from '../types';
import LCUConnector from 'lcu-connector';
import { deleteFile, saveIniFile } from '../../file-system/actions';
import { credentialsFile, startCredentialsListener, createCredentials } from '../credentials';
import { clearLeagueInstance } from '../api';

export let baseCredentials: BaseCredentials;

export const startLeagueConnector = async () => {
  await deleteFile(credentialsFile);
  startCredentialsListener();

  const lcuConnector = new LCUConnector();

  lcuConnector.on('connect', async (e: BaseCredentials) => {
    console.log('lol connected');
    baseCredentials = e;

    const content = createCredentials(e);

    saveIniFile({
      path: '',
      content,
      section: 'credentials',
      filename: credentialsFile,
    });
  });

  lcuConnector.on('disconnect', async () => {
    console.log('lol disconnected');
    baseCredentials = undefined;
    await deleteFile(credentialsFile);
    clearLeagueInstance();
    startCredentialsListener();
  });

  lcuConnector.start();
};

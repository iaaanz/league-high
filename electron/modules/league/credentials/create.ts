import type { BaseCredentials } from '../types';

import ini from 'ini';

export const credentialsFile = 'credentials.ini';

export const createCredentials = (baseCredentials: BaseCredentials) => {
  if (!baseCredentials) throw new Error('baseCredentials is empty');

  const baseUrl = `${baseCredentials.protocol}://${baseCredentials.address}:${baseCredentials.port}`;
  const token = `Basic ${Buffer.from(`riot:${baseCredentials.password}`).toString('base64')}`;

  return {
    ...baseCredentials,
    token,
    baseUrl,
  };
};

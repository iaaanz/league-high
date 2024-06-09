import axios from 'axios';
import https from 'https';
import { Endpoints } from '../enums';
import { baseCredentials } from '../client';
import { createCredentials } from '../credentials/create';
import type { RankedData, SummonerData } from '../types';

let _leagueInstance: ReturnType<typeof axios.create>;

const leagueInstance = () => {
  if (_leagueInstance) return _leagueInstance;

  const { baseUrl, token } = createCredentials(baseCredentials);

  _leagueInstance = axios.create({
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    baseURL: baseUrl,
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });

  return _leagueInstance;
};

export const clearLeagueInstance = () => (_leagueInstance = undefined);

export const getProfile = async () => {
  const [summoner, rankedStats] = await Promise.all([
    getCurrentSummoner(),
    getCurrentRankedStats(),
  ]);

  const icon = `http://ddragon.leagueoflegends.com/cdn/13.11.1/img/profileicon/${summoner.profileIconId}.png`;

  return { icon, summoner, rankedStats };
};

export const getCurrentSummoner = async () => {
  return (await leagueInstance().get<SummonerData>(Endpoints.currentSummoner)).data;
};

export const getCurrentRankedStats = async () => {
  return (await leagueInstance().get<RankedData>(Endpoints.currentRankedStats)).data;
};

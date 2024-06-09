export type SummonerData = {
  accountId: number;
  displayName: string;
  gameName: string;
  internalName: string;
  nameChangeFlag: boolean;
  percentCompleteForNextLevel: number;
  privacy: string;
  profileIconId: number;
  puuid: string;
  rerollPoints: RerollPoints;
  summonerId: number;
  summonerLevel: number;
  tagLine: string;
  unnamed: boolean;
  xpSinceLastLevel: number;
  xpUntilNextLevel: number;
};

export type RerollPoints = {
  currentPoints: number;
  maxRolls: number;
  numberOfRolls: number;
  pointsCostToRoll: number;
  pointsToReroll: number;
};

export type RankedData = {
  earnedRegaliaRewardIds: any[];
  highestCurrentSeasonReachedTierSR: Tier;
  highestPreviousSeasonAchievedDivision: Division;
  highestPreviousSeasonAchievedTier: Tier;
  highestPreviousSeasonEndDivision: Division;
  highestPreviousSeasonEndTier: Tier;
  highestRankedEntry: QueueData;
  highestRankedEntrySR: QueueData;
  queueMap: QueueMap;
  queues: QueueData[];
  rankedRegaliaLevel: number;
  seasons: Seasons;
  splitsProgress: SplitsProgress;
};

export type Division = 'II' | 'III' | 'NA';

export type Tier = 'GOLD' | 'SILVER' | 'BRONZE' | 'NONE' | '';

export type QueueData = {
  division: Division;
  highestDivision: Division;
  highestTier: Tier;
  isProvisional: boolean;
  leaguePoints: number;
  losses: number;
  miniSeriesProgress: string;
  previousSeasonAchievedDivision: Division;
  previousSeasonAchievedTier: Tier;
  previousSeasonEndDivision: Division;
  previousSeasonEndTier: Tier;
  provisionalGameThreshold: number;
  provisionalGamesRemaining: number;
  queueType: string;
  ratedRating: number;
  ratedTier: RatedTier;
  tier: Tier;
  warnings: null;
  wins: number;
};

export type RatedTier = 'NONE';

export type QueueMap = {
  RANKED_FLEX_SR: QueueData;
  RANKED_SOLO_5x5: QueueData;
  RANKED_TFT: QueueData;
  RANKED_TFT_DOUBLE_UP: QueueData;
  RANKED_TFT_PAIRS: QueueData;
  RANKED_TFT_TURBO: QueueData;
};

export type Seasons = {
  RANKED_FLEX_SR: Ranked;
  RANKED_SOLO_5x5: Ranked;
  RANKED_TFT: Ranked;
  RANKED_TFT_DOUBLE_UP: Ranked;
  RANKED_TFT_PAIRS: Ranked;
  RANKED_TFT_TURBO: Ranked;
};

export type Ranked = {
  currentSeasonEnd: number;
  currentSeasonId: number;
  nextSeasonStart: number;
};

export type SplitsProgress = {
  '1': number;
};

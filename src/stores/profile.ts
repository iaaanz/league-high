import { defineStore } from 'pinia';
import { ref } from 'vue';

type Profile = {
  name?: string;
  icon?: string;
  level?: number;
  summonerId?: number;
  rankedStats?: string;
};

export const useProfileStore = defineStore('profile', () => {
  const profile = ref({} as Profile);

  const clearProfile = () => (profile.value = {});

  const getProfile = async () => {
    if (profile.value.summonerId) return profile;

    const { icon, rankedStats, summoner } = await window.league.getProfile();
    const { gameName, summonerLevel } = summoner;
    const { RANKED_SOLO_5x5 } = rankedStats.queueMap;
    const { division, tier } = RANKED_SOLO_5x5;

    const rankedTier = tier !== 'NONE' ? tier : '';
    const rankedDivision = division !== 'NA' ? division : 'unranked';

    profile.value = {
      icon,
      name: gameName,
      level: summonerLevel,
      summonerId: summoner.summonerId,
      rankedStats: `${rankedTier} ${rankedDivision}`,
    };
  };

  return { profile, getProfile, clearProfile };
});

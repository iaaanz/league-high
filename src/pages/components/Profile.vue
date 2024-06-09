<template>
  <div class="row justify-center mt-4 text-center">
    <div class="col position-absolute">
      <img src="/src/assets/images/info2.png" draggable="false" />
    </div>
    <div class="col position-absolute mt-4">
      <img :src="profile.icon ?? defaultIcon" class="summoner-icon" draggable="false" />
    </div>
    <div class="col position-absolute profile-data">
      <img src="/src/assets/images/level.png" draggable="false" />
      <p class="level-number">{{ profile.level ?? '--' }}</p>
      <p class="info-name">{{ profile.name ?? 'Updating...' }}</p>
      <img src="/src/assets/images/online.png" draggable="false" />
      <p class="info-bp mt-3">{{ profile.rankedStats ?? 'Updating...' }}</p>
      <button class="mt-5" style="width: 240px" @click="start">Start</button>
    </div>
  </div>
</template>

<script lang="ts">
import defaultIcon from '@/src/assets/images/default_icon.png';
import { useProfileStore } from '@/src/stores/profile';
import { storeToRefs } from 'pinia';
import { computed, defineComponent, watch } from 'vue';

export default defineComponent({
  name: 'Profile',
  setup() {
    const { profile } = storeToRefs(useProfileStore());

    watch(
      () => profile.value,
      (newValue) => {
        console.log(newValue);
      },
      { deep: true }
    );

    const start = async () => {};

    return {
      start,
      profile,
      defaultIcon,
    };
  },
});
</script>

<style lang="scss" scoped>
.profile-data {
  top: 281px;

  .level-number {
    margin-top: -30px;
    color: #f0e6d2;
  }

  .info-bp {
    font-size: 15px;
    color: #f0e6d2;
  }

  .info-name {
    font-size: 20px;
    color: #f0e6d2;
  }
}

.summoner-icon {
  border-radius: 50%;
  width: 140px;
  height: 140px;
}
</style>

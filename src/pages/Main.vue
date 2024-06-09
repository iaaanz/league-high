<template>
  <NavBar />
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import NavBar from '@/src/pages/components/NavBar.vue';
import { defineComponent } from 'vue';
import { useProfileStore } from '../stores/profile';

export default defineComponent({
  name: 'Main',
  components: { NavBar },
  setup() {
    const { getProfile, clearProfile } = useProfileStore();

    window.league.onListenCredentials(async () => {
      console.log('onListenCredentials');
      clearProfile();
    });
    window.league.onUnlistenClient(async () => {
      console.log('onUnlistenCredentials');
      await getProfile();
    });
  },
});
</script>

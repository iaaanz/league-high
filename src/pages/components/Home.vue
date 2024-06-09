<template>
  <div class="text-center">
    <div class="title">
      <img src="/src/assets/images/underline.png" draggable="false" />
    </div>
    <router-link to="/configurations">
      <button type="button">Get Started</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>

<style>
.title {
  margin-top: 150px;
  margin-bottom: 50px;
}
</style>

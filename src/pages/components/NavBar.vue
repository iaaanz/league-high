<template>
  <div class="nav-container">
    <div class="drag" />
    <div class="tab-container">
      <img src="/src/assets/images/selected.png" id="selected" class="selected" draggable="false" />
      <div class="tab">
        <div class="row">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <router-link to="/home" class="nav-link" :class="activeClass('home')">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/profile" class="nav-link" :class="activeClass('profile')">
                Profile
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/configurations"
                class="nav-link"
                :class="activeClass('configurations')"
              >
                Configurations
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="controls">
        <button @click="minimizeApp()">
          <i class="bi bi-dash h4"></i>
        </button>
        <button>
          <i class="bi bi-bug h6"></i>
        </button>
        <button @click="closeApp()">
          <i class="bi bi-x h5"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRoute } from "vue-router";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  setup() {
    const route = useRoute();

    const closeApp = () => false;

    const minimizeApp = () => false;

    const activeClass = (name: string) => {
      const style = { home: 0, profile: 150, configurations: 345 };

      if (name === route.name) {
        const element = document.getElementById("selected");
        if (!element) return;

        element.style.marginLeft = `${style[name]}px`;
        return "active";
      }
    };

    return {
      closeApp,
      minimizeApp,
      activeClass,
    };
  },
});
</script>

<style lang="scss" scoped>
.drag {
  position: absolute;
  width: 90%;
  height: 25px;
  top: 0;
  -webkit-app-region: drag;
}

.tab-container {
  width: 100%;
  border-top: 2px solid #735828;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  height: 100px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 80%);
}

.nav-item {
  background-color: transparent;
  float: left;
  border: none;
  outline: none;
  padding: 14px 10px;
  transition: 0.3s;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  font-size: 16px;
  margin-left: 45px !important;
  -webkit-app-region: no-drag;
}

.controls button {
  background-color: transparent;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 4px;
  transition: 0.3s;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  font-size: 8px;
  margin-left: 10px;
}

.controls button:hover {
  color: #f0e6d2;
  border: none;
  outline: none;
  cursor: pointer;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

.controls button.active {
  color: #f0e6d2;
}

.controls {
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  margin-right: 5px;
  margin-top: 5px;
}

.selected {
  position: absolute;
  left: -10px;
}

.tab {
  margin: 0px auto;
  margin-top: 20px;
  overflow: hidden;
}
</style>

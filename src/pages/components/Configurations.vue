<template>
  <div class="row text-center justify-content-center mt-4">
    <div class="col-6">
      <div class="row justify-content-center">
        <p class="col-12 mb-2 suboption-name">Champions - Pick order in lobby</p>
        <select id="champ1" class="col-7 mb-2 dropdown" v-model="data.champion1">
          <option v-for="(name, index) in data.champions" :value="index" :key="index">
            {{ name }}
          </option>
        </select>
        <select id="champ2" class="col-7 mb-2 dropdown" v-model="data.champion2">
          <option v-for="(name, index) in data.champions" :value="index" :key="index">
            {{ name }}
          </option>
        </select>
        <select id="champ3" class="col-7 mb-2 dropdown" v-model="data.champion3">
          <option v-for="(name, index) in data.champions" :value="index" :key="index">
            {{ name }}
          </option>
        </select>
      </div>
      <div class="row justify-content-center">
        <p class="col-12 mb-2 suboption-name">Gamemode</p>
        <select id="gamemode" class="col-7 dropdown" v-model="data.gamemode">
          <option value="0">Treino (dev)</option>
          <option value="1">Introducao (recomendado)</option>
        </select>
      </div>
    </div>
    <div class="col-6">
      <div class="row justify-content-center">
        <p class="col-12 mb-2 suboption-name">Automatic login (in progress...)</p>
        <textarea class="col-7 mb-2" rows="1" cols="35" placeholder="Username" disabled />
        <textarea class="col-7 mb-2" rows="1" cols="35" placeholder="Password" disabled />
      </div>
      <div class="row justify-content-center">
        <button class="col-7 mb-2" type="button" @click="selectDirectory()">Game Directory</button>
        <textarea
          id="gamefolder"
          rows="1"
          class="col-7 mb-2"
          cols="35"
          v-model="data.lolPath"
          disabled
        />
      </div>
    </div>
    <div class="col-3 mt-3">
      <button type="button" class="full-width" @click="saveConfiguration()">Save</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import champions from '@/champions.json';

export default defineComponent({
  name: 'Configurations',
  setup() {
    const data = ref({
      gamemode: 1,
      champions,
      lolPath: 'C:\\Riot Games\\League of Legends',
      champion1: 51,
      champion2: 22,
      champion3: 96,
    });

    const selectDirectory = () => {
      const path = window.mainWindow.showOpenDialogSync({
        title: 'Select the League of Legends folder (E.g.: C:\\Riot Games\\League of Legends)',
        properties: ['openDirectory'],
        defaultPath: 'C:\\Riot Games',
      });

      if (!path) return;

      data.value.lolPath = path[0];
    };

    const saveConfiguration = () => {
      if (!data.value.lolPath) {
        return window.mainWindow.showMessageBoxSync({
          message: 'Select the League of Legends path',
          type: 'warning',
        });
      }

      const { champions, ...configuration } = data.value;

      window.fs.saveIniFile({ path: '', content: configuration, filename: 'configurations.ini' });
    };

    return { data, selectDirectory, saveConfiguration };
  },
});
</script>

<style lang="scss" scoped>
textarea {
  overflow: hidden;
  white-space: nowrap;
  resize: none;
  font-family: 'Open Sans', sans-serif;
  padding: 10px 10px;
  color: rgb(62.7%, 60.8%, 54.9%);
  display: block;
  box-sizing: border-box;
  border: 1px solid #785a28;
  background-color: rgba(0, 0, 0, 0.7);
  appearance: none;
  outline: none;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25) inset, 0 0 0 1px rgba(0, 0, 0, 0.25);
}

textarea:focus {
  background: linear-gradient(to bottom, rgba(7, 16, 25, 0.7), rgba(32, 39, 44, 0.7));
  border-image: linear-gradient(to bottom, #785a28, #c8aa6e) 1 stretch;
}

textarea:disabled {
  color: rgba(230, 33, 66, 0.7) !important;
  border: 1px solid rgba(230, 33, 66, 0.7);
}

textarea#gamefolder {
  font-size: 13px;
}

textarea#gamefolder:disabled {
  color: rgb(62.7%, 60.8%, 54.9%) !important;
  border: 1px solid #785a28;
}

.suboption-name {
  font-size: 16px;
  color: #cdbe91;
}

.dropdown {
  display: inline-block;
  position: relative;
  cursor: pointer;
  font-family: 'beaufort-bold', sans-serif;
  color: rgb(62.7%, 60.8%, 54.9%);
  letter-spacing: 0.025rem;
  outline: none;
  padding: 10px 14px;
  background-color: rgba(30, 35, 40, 0.5);
  border: 1px solid transparent;
  border-image: linear-gradient(to top, #695625 0%, #a9852d 23%, #b88d35 93%, #c8aa6e 100%) 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.dropdown:active {
  background: rgba(30, 35, 40, 0.5);
  color: #463714;
  border: 1px solid #463714;
}

.dropdown:focus {
  background: linear-gradient(to top, rgba(88, 83, 66, 0.5), rgba(30, 35, 40, 0.5));
  border: 1px solid transparent;
  border-image: linear-gradient(to top, #c89b3c, #f0e6d2) 1;
}

.dropdown option {
  position: relative;
  color: #cdbe91;
  cursor: pointer;
  padding: 9px;
  border-top: 1px solid #1f2123 !important;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: #010a13;
  -o-border-image: linear-gradient(0deg, #695625, #463714) 1;
  border-image: -webkit-linear-gradient(bottom, #695625, #463714) 1;
  border-image: linear-gradient(0deg, #695625, #463714) 1;
  font-size: 13px;
  height: 20px;
}

.dropdown option:hover {
  background-color: #fff;
}

.dropdown option:disabled {
  color: #756c53;
}
</style>

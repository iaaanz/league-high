/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface Window {
  // expose in the `electron/preload/index.ts`
  ipcRenderer: import('electron').IpcRenderer;
  fs: typeof import('@/electron/modules/file-system/expose').default;
  league: typeof import('@/electron/modules/league/expose').default;
  mainWindow: typeof import('@/electron/modules/main-window').default;
}

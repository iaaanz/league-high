import type { Router } from "vue-router";

import { createPinia } from "pinia";

/*
 * When adding new properties to stores, you should also
 * extend the `PiniaCustomProperties` interface.
 * @see https://pinia.vuejs.org/core-concepts/plugins.html#typing-new-store-properties
 */
declare module "pinia" {
  export interface PiniaCustomProperties {
    readonly router: Router;
  }
}

const pinia = createPinia();

// You can add Pinia plugins here
// pinia.use(SomePiniaPlugin)

export default pinia;

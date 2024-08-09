// src/shims-vue.d.ts
// src/shims-vue.d.ts

import Vue from 'vue';
import { Store } from 'vuex';
import { State } from '@/store/types'; 

declare module 'vue/types/vue' {
  interface Vue {
    $store: Store<State>;
  }
}

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<any, any, any>;
  export default component;
}

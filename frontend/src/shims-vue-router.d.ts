// src/shims-vue-router.d.ts
import { RouteLocationNormalized, Router } from 'vue-router';

declare module 'vue/types/vue' {
  interface ComponentCustomProperties {
    $router: Router;
    $route: RouteLocationNormalized;
  }
}

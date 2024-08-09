import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Product from '@/views/Product.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/product', component: Product }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

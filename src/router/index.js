import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/*',
    name: '*',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound/index.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

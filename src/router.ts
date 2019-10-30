import Vue from 'vue';
import Home from './views/Home.vue';
import Pokedex from './views/Pokedex.vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/pokedex',
      name: 'pokedex',
      component: Pokedex,
    },
  ],
});

import Vue from 'vue';
import Starter from './views/Starter.vue';
import Home from './views/Home.vue';
import Pokedex from './views/Pokedex.vue';
import Game from './views/Game.vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Starter',
      component: Starter,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/pokedex',
      name: 'Pokedex',
      component: Pokedex,
    },
    {
      path: '/game',
      name: 'Game',
      component: Game,
    }
  ],
});

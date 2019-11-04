import Vue from 'vue';
import Starter from './views/Starter.vue';
import Home from './views/Home.vue';
import Pokedex from './views/Pokedex.vue';
import Pokemon from './views/Pokemon.vue';
import Game from './views/Game.vue';
import Router from 'vue-router';
import pokemons from './store/modules/pokemons';

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
      path: '/pokedex/pokemon/:name',
      name: 'Pokemon',
      component: Pokemon,
      props: (route) => ({
        pokemon: pokemons,
        ...route.params
      })
    },
    {
      path: '/game',
      name: 'Game',
      component: Game,
    }
  ],
});

import axios from 'axios';
import pokemons from '@/store/modules/pokemons.ts';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pokemons,
  },
})
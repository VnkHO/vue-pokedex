import axios from 'axios';
import { PokemonState, Pokemon } from '@/models/pokemon.ts';
import { Module } from 'vuex';
// import Pokemon from '@/models/pokemon';
// import Vuex from 'vuex';


const state = {
  pokemons: [],
  // searchWord: null,
  // filteredCourses: null,
}

const getters = {
  GET_ALL_POKEMONS: (state: any) => state.pokemons,
  // allCourses: (state) => state.pokemons,
  // getSearchWord: (state: any) => state.searchWord,
  // getFilteredCourse: (state: any) => state.filteredCourses

}

const actions = {

  async fetchPokemons({ state, commit }) {
    if (!state.pokemons['pokemons']) {
      const URL = "https://pokeapi.co/api/v2/pokemon/";
      // const limitPokemon = "?limit=151&offset=0";
      const allPokemonsId = 99;
      let pokemons = [];
      for (let i = 1; i <= allPokemonsId; i++) {
        const response = await axios.get(`${URL}${i}`);
        pokemons.push(response.data)
      }
      // console.log(pokemons)
      commit('SET_POKEMONS', await pokemons)
    }
  },
  // FILTERED_COURSES({ commit }, word) {
  //   commit('FILTERED_COURSES', word)
  // }

  // async filterPokemon({ commit }, event) {
  //   console.log('My event :', event)

  //   commit('FILTER_POKEMONS')
  // }
};

const mutations = {
  SET_POKEMONS: (state: any, pokemons: any) => state.pokemons = pokemons,
  // FILTERED_COURSES(state, word) {
  //   if (!(word) || word === '{}') {
  //     state.searchWord = null
  //     state.filteredCourses = null
  //   } else {
  //     state.searchWord = word
  //     word = word.trim().toLowerCase()
  //     console.log('NIKE TAZ MERE: ', state.courses)
  //     state.filteredCourses = state.pokemons.filter((course) => {
  //       return course.name.toLowerCase().includes(word)
  //     })
  //   }
  // }
};

export default {
  state,
  getters,
  actions,
  mutations
}
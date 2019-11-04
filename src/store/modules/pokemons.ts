import axios from 'axios';
import { PokemonState, Pokemon } from '@/models/pokemon.ts';
import { Module } from 'vuex';



const state = {
  pokemons: [],
  filteredPokemons: null,
  searchWord: '',
}

const getters = {
  all_pokemons: (state: any) => state.pokemons,
  searchWord: (state: any) => state.searchWord,
  filters_pokemons: (state: any) => state.filteredPokemons,
}

const mutations = {
  INIT_POKEMONS: (state: any, pokemons: any) => state.pokemons = pokemons,
  FILTERED_POKEMON(state: any, searchWord: string) {
    if (!(searchWord) || searchWord === '{}') {
      state.searchWord = null
      state.filteredPokemons = null
    } else {
      state.searchWord = searchWord
      searchWord = searchWord.trim().toLowerCase()
      state.filteredPokemons = state.pokemons.filter((pokemon: any) => {
        return pokemon.name.toLowerCase().includes(searchWord)
      })
    }
  }
};

const actions = {

  async fetchPokemons({ state, commit }: any) {
    if (!state.pokemons['pokemons']) {
      const URL = "https://pokeapi.co/api/v2/pokemon/";
      // const limitPokemon = "?limit=151&offset=0";
      const allPokemonsId = 99;
      let pokemons = [];
      for (let i = 1; i <= allPokemonsId; i++) {
        const response = await axios.get(`${URL}${i}`);
        pokemons.push(response.data)
      }
      commit('INIT_POKEMONS', await pokemons)
    }
  },
  FILTERED_POKEMON({ commit }: any, serchWord: string) {
    commit('FILTERED_POKEMON', serchWord)
  }
};


export default {
  state,
  getters,
  mutations,
  actions
}
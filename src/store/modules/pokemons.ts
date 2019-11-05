import axios from 'axios';
import { PokemonState, Pokemon } from '@/models/pokemon.ts';
import { Module } from 'vuex';



const state: PokemonState = {
  pokemons: [],
  pokemonsSpecies: [],
  // pokemonsGender: [],
  byPokemon: [],
  filteredPokemons: null,
  searchWord: '',
  id: 1
}

const getters = {
  all_pokemons: (state: any) => state.pokemons,
  searchWord: (state: any) => state.searchWord,
  filters_pokemons: (state: any) => state.filteredPokemons,
  get_id: (state: any) => state.id,
  pokemon_species: (state: any) => state.pokemonsSpecies,
  // pokemon_gender: (state: any) => state.pokemonsGender,
  by_pokemon: (state: any) => state.byPokemon
}

const mutations = {
  INIT_POKEMONS: (state: any, pokemons: any) => state.pokemons = pokemons,
  GET_ID: (state: any, id: number) => state.id = id,
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
  },
  SET_POKEMON_SPECIES: (state: any, pokemonsSpecies: any) => state.pokemonsSpecies = pokemonsSpecies,
  // SET_POKEMON_GENDER: (state: any, pokemonsGender: any) => state.pokemonsGender = pokemonsGender,
  BY_POKEMON: (state: any, byPokemon: any) => state.byPokemon = byPokemon
};

const actions = {

  getID({ commit }: any, id: number) {
    commit('GET_ID', id)
  },
  async fetchPokemons({ state, commit }: any) {
    if (!state.pokemons['pokemons']) {
      const URL = "https://pokeapi.co/api/v2/pokemon/";
      // const limitPokemon = "?limit=151&offset=0";
      let allPokemonsId = 99;
      let pokemons = [];
      for (let i = 1; i <= allPokemonsId; i++) {
        const response = await axios.get(`${URL}${i}`);
        pokemons.push(response.data)
      }
      commit('INIT_POKEMONS', await pokemons)
    }
  },
  filteredPokemons({ commit }: any, searchWord: string) {
    commit('FILTERED_POKEMON', searchWord)
  },
  async fetchByPokemon({ state, commit }: any) {
    let { id } = state
    const URL = "https://pokeapi.co/api/v2/pokemon/";
    let pokemonsArr = [];

    id = parseInt(id)
    if (id == 1) {
      const response = await axios.get(`${URL}${id}`)
      const responsePlus1 = await axios.get(`${URL}${id + 1}`)
      pokemonsArr.push(response.data, responsePlus1.data)
    } else if (id == 99) {
      const response = await axios.get(`${URL}${id}`)
      const responseMinus1 = await axios.get(`${URL}${id - 1}`)
      pokemonsArr.push(responseMinus1.data, response.data)
    } else {
      const response = await axios.get(`${URL}${id}`)
      const responsePlus1 = await axios.get(`${URL}${id + 1}`)
      const responseMinus1 = await axios.get(`${URL}${id - 1}`)
      pokemonsArr.push(responseMinus1.data, response.data, responsePlus1.data)
    }
    commit('BY_POKEMON', await pokemonsArr)
  },
  async fetchPokemonsSpecies({ state, commit }: any) {
    const { pokemonsSpecies, id } = state
    if (!pokemonsSpecies['pokemonsSpecies']) {
      const URL = "https://pokeapi.co/api/v2/pokemon-species/";
      const response = await axios.get(`${URL}${id}`)
      commit('SET_POKEMON_SPECIES', await response.data)
    }
  },
  // async fetchPokemonsGender({ state, commit }: any) {
  //   const { pokemonsGender, id } = state
  //   if (!pokemonsGender['pokemonsGender']) {
  //     const URL = "https://pokeapi.co/api/v2/gender/";
  //     const response = await axios.get(`${URL}${id}`)
  //     console.log('My responseGender :', response.data)
  //     commit('SET_POKEMON_GENDER', await response.data)
  //   }
  // },
};


export default {
  state,
  getters,
  mutations,
  actions
}
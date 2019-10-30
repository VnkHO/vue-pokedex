import axios from 'axios';
// import Pokemon from '@/models/pokemon';
// import { Module } from 'vuex';

const state = {
  pokemons: []
};

const getters = {
  GET_ALL_POKEMONS: (state) => state.pokemons
};

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
      console.log(pokemons)
      commit('SET_POKEMONS', await pokemons)
    }
  }
};

const mutations = {
  SET_POKEMONS: (state, pokemons) => state.pokemons = pokemons
};

export default {
  state,
  getters,
  actions,
  mutations
}

// const pokemons: Module<{ pokemons: Pokemon[] }, any> = {

//   state: {
//     pokemons: [
//       {
//         id: 1,
//         name: "Pokemon 1"
//       },
//       {
//         id: 2,
//         name: "Pokemon 1"
//       },
//     ]
//   },
//   getters: {
//     allPokemonGetter: (state) => {
//       state.pokemons;
//     }
//   },
//   mutations: {
//     // SET_POKEMON: (state, payload) => {
//     //   state.pokemons = payload
//     // },
//     // ADD_POKEMON: (state, payload) => {
//     //   state.pokemons.push(payload)
//     // },
//   },
//   actions: {
//     // GET_POKEMON: async (context, payload) => {
//     //   let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/')
//     //   context.commit('SET_POKEMON', data)
//     // },
//     // SAVE_POKEMON: async (context, payload) => {
//     //   let { data } = await axios.post('https://pokeapi.co/api/v2/pokemon/')
//     //   context.commit('ADD_POKEMON', payload)
//     // },
//   },
// };

// export default pokemons;
<template>
  <div>
    <!-- <input type="search" @keyup="$emit('filter', filterPokemon)" /> -->
    <input type="search" v-model="filter" />
    <div>{{ filterPokemon }}</div>
  </div>
</template>

<script lang="ts">
// import { mapActions } from "vuex";

export default {
  name: "FilterPokemons",
  data() {
    return {
      arrPokemons: [],
      filter: ""
    };
  },
  computed: {
    filterPokemon: function() {
      return this.arrPokemons[0].filter(pokemon => {
        return pokemon.name === "bulbasaur";
      });
    }
  },
  async created() {
    await this.arrPokemons.push(this.$attrs.pokemons.pokemons);
  }
};
</script>
<template>
  <div id="pokedexList" class="pokedexList">
    <h3>My Pokedex List</h3>
    <section class="pokedexList-section">
      <div class="pokedexList-container" v-for="pokemon in GET_ALL_POKEMONS" :key="pokemon.name">
        <div class="pokedexList-container__title">
          <h4 class="pokedexList-title">{{ pokemon.name }}</h4>
          <p class="pokedexList-type" v-if="pokemon.types[0]">{{ pokemon.types[0].type.name}}</p>
          <p class="pokedexList-type" v-if="pokemon.types[1]">{{ pokemon.types[1].type.name}}</p>
        </div>
        <div>
          <img class="pokedexList-image" :src="pokemon.sprites.front_default" :alt="pokemon.name" />
        </div>
        <!-- <router-link :to="pokemon.url">{{ pokemon.name }}</router-link> -->
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PokemonItem from "@/components/PokemonItem/PokemonItem.vue";
import "../PokedexList/PokedexList.scss";

import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  name: "PokedexList",
  components: {
    PokemonItem
  },
  methods: {
    ...mapActions(["fetchPokemons"])
  },
  computed: {
    ...mapGetters(["GET_ALL_POKEMONS"])
  },
  created() {
    this.fetchPokemons();
  }
});
</script>


<template>
  <div id="pokemonItem" class="pokemonItem">
    <section class="pokemonItem-section">
      <div class="pokemonItem-container" v-for="pokemon in GET_ALL_POKEMONS" :key="pokemon.name">
        <h4 class="pokemonItem-title">{{ pokemon.name }}</h4>
        <img class="pokemonItem-image" :src="pokemon.sprites.front_default" :alt="pokemon.name" />
        <!-- <router-link :to="pokemon.url">{{ pokemon.name }}</router-link> -->
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import { mapGetters, mapActions } from "vuex";
import "../PokemonItem/PokemonItem.scss";

export default Vue.extend({
  name: "PokemonItem"
  // methods: {
  //   ...mapActions(["fetchPokemons"])
  // },
  // computed: {
  //   ...mapGetters(["GET_ALL_POKEMONS"])
  // },
  // created() {
  //   this.fetchPokemons();
  // }
});
</script>


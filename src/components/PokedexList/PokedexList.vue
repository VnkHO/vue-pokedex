<template>
  <div id="pokedexList" class="pokedexList">
    <h2>Pokedex</h2>
    <section class="pokedexList-section">
      <article
        class="pokedexList-container"
        v-for="(pokemon) in GET_ALL_POKEMONS"
        :key="pokemon.name"
        :class="{
          'bug': pokemon.types[0].type.name === 'bug',
          'dark': pokemon.types[0].type.name === 'dark',
          'dragon': pokemon.types[0].type.name === 'dragon',
          'electric': pokemon.types[0].type.name === 'electric',
          'fairy': pokemon.types[0].type.name === 'fairy',
          'fighting': pokemon.types[0].type.name === 'fighting',
          'fire': pokemon.types[0].type.name === 'fire',
          'flying': pokemon.types[0].type.name === 'flying',
          'ghost': pokemon.types[0].type.name === 'ghost',
          'grass': pokemon.types[0].type.name === 'grass',
          'ground': pokemon.types[0].type.name === 'ground',
          'ice': pokemon.types[0].type.name === 'ice',
          'normal': pokemon.types[0].type.name === 'normal',
          'poison': pokemon.types[0].type.name === 'poison',
          'psychic': pokemon.types[0].type.name === 'psychic',
          'rock': pokemon.types[0].type.name === 'rock',
          'steel': pokemon.types[0].type.name === 'steel',
          'water': pokemon.types[0].type.name === 'water',
          }"
      >
        <div class="pokedexList-information__container">
          <h4 class="pokedexList-information__title">{{ pokemon.name }}</h4>
          <div class="pokedexList-information__type--container">
            <p
              class="pokedexList-information__type"
              v-if="pokemon.types[0]"
            >{{ pokemon.types[0].type.name }}</p>
            <p
              class="pokedexList-information__type"
              v-if="pokemon.types[1]"
            >{{ pokemon.types[1].type.name}}</p>
          </div>
          <p
            class="pokedexList-information__order"
            v-if="pokemon.id.toString().length === 1"
          >{{ `#00${pokemon.id}` }}</p>
          <p
            class="pokedexList-information__order"
            v-if="pokemon.id.toString().length === 2"
          >{{ `#0${pokemon.id}` }}</p>
          <p
            class="pokedexList-information__order"
            v-if="pokemon.id.toString().length === 3"
          >{{ `#${pokemon.id}` }}</p>
        </div>

        <figure class="pokedexList-image__container">
          <img class="pokedexList-image" :src="pokemon.sprites.front_default" :alt="pokemon.name" />
        </figure>
      </article>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PokemonItem from "@/components/PokemonItem/PokemonItem.vue";
import "../PokedexList/PokedexList.scss";

import { mapGetters, mapActions } from "vuex";
import pokemons from "../../store/modules/pokemons";

export default Vue.extend({
  name: "PokedexList",
  data: {},
  mounted() {
    // this.scroll();
  },
  components: {
    PokemonItem
  },
  methods: {},
  computed: {
    ...mapGetters(["GET_ALL_POKEMONS"])
  },
  watch: {
    GET_ALL_POKEMONS: {
      handler(GET_ALL_POKEMONS) {
        console.log("HELLO POKEMON :", GET_ALL_POKEMONS);
      }
    }
  },
  created() {
    this.$store.dispatch("fetchPokemons");
  }
});
</script>


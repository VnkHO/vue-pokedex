<template>
  <div id="pokedexList" class="pokedexList">
    <h2 class="pokedexList-title">Pokedex</h2>
    <input type="search" v-model="searchWord" />
    <p>{{ searchWord }}</p>
    <div v-if="all_pokemons.length === 0">Loading....</div>
    <section v-else class="pokedexList-section">
      <article
        v-for="(pokemon, index) in (filters_pokemons || all_pokemons)"
        class="pokedexList-container"
        :key="pokemon.name"
        :class="[
          `pokedexList-container__animation--${index + 1}`,
          renderClass(pokemon.types[0].type.name)]"
      >
        <router-link
          class="pokedexList-link"
          :to="{path: `/pokedex/pokemon/${pokemon.name}`,
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
        </router-link>
      </article>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PokemonItem from "@/components/PokemonItem/PokemonItem.vue";
import FilterPokemons from "@/components/FilterPokemons/FilterPokemons.vue";
import "../PokedexList/PokedexList.scss";

import { mapGetters, mapActions, mapState } from "vuex";
import pokemons from "../../store/modules/pokemons";

export default Vue.extend({
  name: "PokedexList",
  data() {
    return {};
  },
  components: {
    PokemonItem,
    FilterPokemons
  },
  methods: {
    renderClass: function(type: any) {
      return `
          'bug': ${type} === 'bug',
          'dark': ${type} === 'dark',
          'dragon': ${type} === 'dragon',
          'electric': ${type} === 'electric',
          'fairy': ${type} === 'fairy',
          'fighting': ${type} === 'fighting',
          'fire': ${type} === 'fire',
          'flying': ${type} === 'flying',
          'ghost': ${type} === 'ghost',
          'grass': ${type} === 'grass',
          'ground': ${type} === 'ground',
          'ice': ${type} === 'ice',
          'normal': ${type} === 'normal',
          'poison': ${type} === 'poison',
          'psychic': ${type} === 'psychic',
          'rock': ${type} === 'rock',
          'steel': ${type} === 'steel',
          'water': ${type} === 'water',
        `;
    }
  },
  computed: {
    ...mapGetters(["all_pokemons", "filters_pokemons"]),
    searchWord: {
      get(): any {
        return this.$store.getters.searchWord;
      },
      set(value: string) {
        this.$store.dispatch("FILTERED_POKEMON", value);
      }
    }
  },
  watch: {},
  created() {
    this.$store.dispatch("fetchPokemons");
  },
  mounted() {
    console.log(" Gros test :", this.$store.getters.filteredPokemons);
  }
});
</script>

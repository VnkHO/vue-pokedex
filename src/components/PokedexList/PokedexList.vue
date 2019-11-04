<template>
  <div id="pokedexList" class="pokedexList">
    <h2 class="pokedexList-title">Pokedex</h2>
    <!-- <FilterPokemons :pokemons="pokemons" style="border: 2px solid red"></FilterPokemons> -->
    <!-- <input type="search" v-model="searchWord" required />
    <p>getSearchWord: {{ searchWord }}</p>-->
    <div v-if="pokemons.pokemons.length === 0">Loading....</div>
    <section class="pokedexList-section">
      <article
        v-for="(pokemon, index) in GET_ALL_POKEMONS"
        class="pokedexList-container"
        :key="pokemon.name"
        :class="[
          `pokedexList-container__animation--${index + 1}`,
          {
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
          }]"
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
    return {
      bottom: false
      // pokemons: this.$store.state.pokemons
      // keyword: this.$store.state.pokemons.keyword
    };
  },
  components: {
    PokemonItem,
    FilterPokemons
  },
  methods: {
    bottomVisible() {
      // const scrollY = window.scrollY;
      // const visible = document.documentElement.clientHeight;
      // const pageHeight = document.documentElement.scrollHeight;
      // const bottomOfPage = visible + scrollY >= pageHeight;
      // return bottomOfPage || pageHeight < visible;
    },
    addPokemon() {
      // console.log("TEST");
      // console.log("AZFZEF", mapGetters(["GET_ALL_POKEMONS"]));
      // console.log(this.$store.dispatch("fetchPokemons"));
    }
  },
  computed: {
    ...mapState(["pokemons"]),
    ...mapGetters(["GET_ALL_POKEMONS"])
    // filteredCourses() {
    //   try {
    //     let a =
    //       this.$store.getters.getFilteredCourse ||
    //       this.$store.getters.allCourses;
    //     console.log("BOUUFE TES MROTS :", a);
    //     return a;
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
    // searchWord: {
    //   get() {
    //     return this.$store.state.searchWord;
    //   },
    //   set(value) {
    //     console.log("MY VALUE", value);
    //     this.$store.dispatch("FILTERED_COURSES", value);
    //   }
    // }
  },
  watch: {
    // GET_ALL_POKEMONS: {
    //   handler(GET_ALL_POKEMONS) {
    //     console.log("HELLO GET_ALL_POKEMONS :", GET_ALL_POKEMONS);
    //   }
    // },
    // bottom(bottom) {
    //   if (bottom) {
    //     this.addPokemon();
    //   }
    // }
  },
  created() {
    this.$store.dispatch("fetchPokemons");
    // window.addEventListener("scroll", () => {
    //   this.bottom = this.bottomVisible();
    // });
    // this.addPokemon();
  },
  mounted() {}
});
</script>

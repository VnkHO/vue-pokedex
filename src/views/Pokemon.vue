<template>
  <div id="pokemon" class="pokemon">
    <h1>Pokemon</h1>
    <section>
      <article v-for="pokemon in GET_ALL_POKEMONS" :key="pokemon.name">
        <div v-if="pokemon.name === namePokemon">
          <h4>{{ pokemon.name }}</h4>
          <div class>
            <p class v-if="pokemon.types[0]">{{ pokemon.types[0].type.name }}</p>
            <p class v-if="pokemon.types[1]">{{ pokemon.types[1].type.name}}</p>
          </div>
          <p class v-if="pokemon.id.toString().length === 1">{{ `#00${pokemon.id}` }}</p>
          <p class v-if="pokemon.id.toString().length === 2">{{ `#0${pokemon.id}` }}</p>
          <p class v-if="pokemon.id.toString().length === 3">{{ `#${pokemon.id}` }}</p>
          <figure class>
            <img class :src="pokemon.sprites.front_default" :alt="pokemon.name" />
          </figure>
        </div>
        <div v-if="pokemon.name === namePokemon">
          <nav>
            <ul>
              <li>About</li>
              <li>Base Stats</li>
              <li>Evolution</li>
              <li>Moves</li>
            </ul>
          </nav>
          <div>
            <div>
              <p>Species: {{pokemon.species.name }}</p>
              <p>Height: {{ pokemon.height}}</p>
              <p>Weight: {{pokemon.weight}}</p>Species, height, weight, abilities
            </div>
            <div>Breeding genrder egg groups egg cycle</div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions, mapState } from "vuex";

export default Vue.extend({
  name: "pokemon",
  data() {
    return {
      namePokemon: this.$route.params.name
    };
  },
  components: {},
  computed: {
    ...mapGetters(["GET_ALL_POKEMONS"])
  },
  created() {
    this.$store.dispatch("fetchPokemons");
  }
});
</script>


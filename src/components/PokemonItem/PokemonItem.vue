<template>
  <div id="pokemonItem" class="pokemonItem">
    <h1>Pokemon</h1>
    <section>
      <article v-for="pokemon in by_pokemon" :key="pokemon.name">
        <div v-if="pokemon.name === namePokemon">
          <h4>{{ pokemon.name }}</h4>
          <PokemonType class="pokemonItem-Type" :pokemon="pokemon" />
          <PokemonOrder class="pokemonItem-Order" :pokemon="pokemon" />
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
import { mapGetters, mapActions, mapState } from "vuex";
import PokemonOrder from "@/components/PokemonOrder/PokemonOrder.vue";
import PokemonType from "@/components/PokemonType/PokemonType.vue";

export default {
  name: "PokemonItem",
  data(this: any) {
    return {
      namePokemon: this.$route.params.name
    };
  },
  components: {
    PokemonOrder,
    PokemonType
  },
  computed: {
    ...mapGetters(["get_id", "pokemon_gender", "by_pokemon"])
  },
  created(this: any) {
    this.$store.dispatch("getID", this.$route.params.id);
    this.$store.dispatch("fetchPokemonsSpecies");
    this.$store.dispatch("fetchByPokemon");
  }
};
</script>


<template>
  <div id="Home" class="Home">
    <h1>Home</h1>
    <router-link class="router" tag="div" to="/pokedex">Pokedex</router-link>
    <router-link class="router" tag="div" to="/game">Game</router-link>
    <router-link class="router" tag="div" to="/error">Error</router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home"
});
</script>

<style scoped>
.router {
  margin: 5rem;
  font-size: 4rem;
  background: var(--red);
  text-align: center;
  padding: 2rem;
  color: var(--white);
}

h1 {
  text-align: center;
  margin: 5rem 0;
  font-size: 8rem;
}
</style>
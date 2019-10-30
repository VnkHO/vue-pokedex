<template>
  <div id="pokedex" class="pokedex">
    <PokedexList></PokedexList>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PokedexList from "@/components/PokedexList/PokedexList.vue";

export default Vue.extend({
  name: "pokedex",
  components: {
    PokedexList
  }
});
</script>


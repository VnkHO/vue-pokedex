<template>
  <div id="home" class="home">
    <PokedexStarter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PokedexStarter from "@/components/PokedexStarter/PokedexStarter.vue";

export default Vue.extend({
  name: "Starter",
  components: {
    PokedexStarter
  }
});
</script>


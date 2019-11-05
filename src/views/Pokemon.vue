<template>
  <PokemonItem />
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions, mapState } from "vuex";
import PokemonItem from "@/components/PokemonItem/PokemonItem.vue";

export default Vue.extend({
  name: "pokemon",
  components: {
    PokemonItem
  }
});
</script>


<template>
  <input type="search" v-model="searchWord" />
</template>

<script lang="ts">
import { mapGetters } from "vuex";

export default {
  name: "FilterPokemons",
  computed: {
    searchWord: {
      get(): string {
        return this.$store.getters.searchWord;
      },
      set(value: string): any {
        this.$store.dispatch("filteredPokemons", value);
      }
    }
  }
};
</script>
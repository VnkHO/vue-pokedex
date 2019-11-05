<template>
  <input type="search" v-model="searchWord" />
</template>

<script lang="ts">
import { mapGetters } from "vuex";

export default {
  name: "FilterPokemons",
  computed: {
    searchWord: {
      get() {
        return this.$store.getters.searchWord;
      },
      set(value: string) {
        this.$store.dispatch("filteredPokemons", value);
      }
    }
  }
};
</script>
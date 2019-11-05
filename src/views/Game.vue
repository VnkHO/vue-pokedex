<template>
  <div id="Game" class="Game">
    <GamePlay />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GamePlay from "@/components/GamePlay/GamePlay.vue";

export default Vue.extend({
  name: "Game",
  components: {
    GamePlay
  }
});
</script>


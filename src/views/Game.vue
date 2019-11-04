<template>
  <div id="Game" class="Game">
    <GamePlay />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GamePlay from "@/components/GamePlay/GamePlay";

export default Vue.extend({
  name: "Game",
  components: {
    GamePlay
  }
});
</script>


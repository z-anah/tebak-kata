<script lang="ts">
import { defineComponent } from "vue";
import { onUnmounted } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  methods: {
    test() {
      this.$router.push(
        "/game/" +
          this.$route.params.gametype +
          "/" +
          this.gameTime +
          "/" +
          this.wordTime
      );
    },
  },
  data: () => {
    return {
      gameTime: 0 as number,
      wordTime: 0 as number,
    };
  },
  async mounted() {},
});
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="text-[20px] game-font grays text-center">
      <p class="text-[40px]">Game time</p>
      <input type="number" v-model="gameTime" placeholder="Game time" />
      <p class="text-[40px]" >Word time</p>
      <input type="number" v-model="wordTime" placeholder="Word time" />
      <br>
      <button class="text-[50px] game-font mint center text-center buttonMeBig" @click="test">Let's Go</button>
    </div>
  </div>
</template>

<style scoped>
@import "../style/css/common.css";
</style>

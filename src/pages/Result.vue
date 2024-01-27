<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  components: {},
  data: () => {
    return {
      score:  0,
      audioResult: new Audio('./result.mp3'),
    }
  },
  created() {
    this.audioResult.play();
    this.audioResult.currentTime = 0;
  },
  beforeDestroy() {
  },
  mounted() {
  },
  computed: {
  },
  methods: {
  }
});
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <router-link to="/">
      <div class="flex p-12 bg-white rounded-md shadow-md items-center justify-center ">
          <img src="https://img.icons8.com/?size=48&id=gmaT28RFMt6O&format=png" />
          <div class="w-12"></div>
          <p class="game-font grays">You got</p>
          <div class="w-12"></div>
              <p class="game-font purples">{{ $route.params.score }}</p>
            <div class="w-12"></div>
            <p class="game-font grays">pts</p>
        </div>
      </router-link>
  </div>
</template>


<style scoped>
@import '../style/css/common.css';
</style>
../data/data
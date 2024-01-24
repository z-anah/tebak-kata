<script lang="ts">
import { defineComponent, ref } from 'vue';
import alat from '../data/alat-dapur';

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
          <p class="grays">You got</p>
          <div class="w-12"></div>
              <p class="purples">{{ $route.params.score }}</p>
            <div class="w-12"></div>
            <p class="grays">pts</p>
        </div>
      </router-link>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Rocher';
  src: url(https://assets.codepen.io/9632/RocherColorGX.woff2);
}

p {
  font-family: 'Rocher';
  font-size: 60px;
}

@font-palette-values --Grays {
  font-family: Rocher;
  base-palette: 9;
}

@font-palette-values --Purples {
  font-family: Rocher;
  base-palette: 6;
}

@font-palette-values --Mint {
  font-family: Rocher;
  base-palette: 7;
}
.grays {
  font-palette: --Grays;
}
.purples {
  font-palette: --Purples;
}
.mint {
  font-palette: --Mint;
}
</style>

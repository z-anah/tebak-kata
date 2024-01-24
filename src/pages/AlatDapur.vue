<script lang="ts">
import { defineComponent, ref } from 'vue';
import alat from '../data/alat-dapur';

export default defineComponent({
  name: 'App',
  components: {},
  data: () => {
    return {
      items: alat,
      // Timeout in typescript
      timer: 0 as number,
      seconds: 10,
      initialSeconds: 10,
      toGuess: "",
      disabled: ref(false),
      score: 0,
      audioFail: new Audio('./fail.mp3'),
      audioSuccess: new Audio('./correct.mp3'),
      audioSkip: new Audio('./skip.mp3'),
    }
  },
  created() {
    this.toGuess = this.items[Math.floor(Math.random() * this.items.length)].label;
    this.timer = setInterval(() => {
      if (this.seconds == 4) {
        this.disabled = true;
      } else if (this.seconds == 0) {
        this.disabled = false;
      }
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        this.reset();
        this.audioFail.play();
        this.audioFail.currentTime = 0;
      }
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  mounted() {
  },
  computed: {
    formattedTime() {
      let minutes = Math.floor(this.seconds / 60);
      let seconds = this.seconds % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    },
  },
  methods: {
    isTrue() {
      this.score++;
      this.reset();
      this.audioSuccess.play();
      this.audioSuccess.currentTime = 0;
    },
    isFalse() {
      this.reset();
      this.audioSkip.play();
      this.audioSkip.currentTime = 0;
    },
    reset() {
      this.seconds = this.initialSeconds;
      this.toGuess = this.items[Math.floor(Math.random() * this.items.length)].label;
    },
  }
});
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div>
      <div class="p-4 flex items-center justify-center">
        <div class="text-4xl text-center">
          SCORE: {{ score*10 }}
        </div>
      </div>
      <div :class="{ shake: disabled }">
        <div class="p-4 flex items-center justify-center">
          <div class="text-2xl font-extralight text-center">
            {{ formattedTime }}
          </div>
        </div>
      </div>

      <div class="p-8 bg-white shadow-md flex items-center justify-center">
        <div class="text-[50px] font-bold text-center">
          <p class="greys">{{ toGuess }}</p>
        </div>
      </div>
      <div class="py-8 flex justify-around">
        <img @click="isFalse" src="https://img.icons8.com/?size=48&id=fYgQxDaH069W&format=png" />
        <img @click="isTrue" src="https://img.icons8.com/?size=48&id=70yRC8npwT3d&format=png" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.shake {
  animation: shake 3s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  color: red;
}

@keyframes shake {

  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

@font-face {
  font-family: 'Rocher';
  src: url(https://assets.codepen.io/9632/RocherColorGX.woff2);
}

p {
  font-family: 'Rocher';
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

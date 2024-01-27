<script lang="ts">
import { defineComponent, ref } from 'vue';
import data from '../data/data';
import t from '@/data/alatdapur';

export default defineComponent({
  name: 'App',
  components: {},
  data: () => {
    return {
      items: [] as any,
      timer: 0 as number,
      seconds: 0 as number,
      gameSeconds: 0 as number,
      initialSeconds: 0 as number,
      toGuess: "",
      disabled: ref(false),
      score: 0,
      audioFail: new Audio('./fail.mp3'),
      audioSuccess: new Audio('./correct.mp3'),
      audioSkip: new Audio('./skip.mp3'),
      audioClicking: new Audio('./clicking.mp3'),
      gameType: "",
    }
  },
  created() {
    this.initMe();
    this.reset();
    this.timer = setInterval(() => {
      this.gameSeconds--;
      if (this.gameSeconds == 0) {
        clearInterval(this.timer);
        this.$router.push('/result/' + this.score * 10);
      } else if (this.gameSeconds == 30) {
        this.audioClicking.play();
        this.audioClicking.currentTime = 0;
      } else if (this.seconds == 4) {
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
    formattedTimeGame() {
      let minutes = Math.floor(this.gameSeconds / 60);
      let seconds = this.gameSeconds % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    },
  },
  methods: {
    initMe() {
      this.seconds = parseInt(this.$route.params.wordtime + "") == 0 ? 30 : parseInt(this.$route.params.wordtime + "");
      this.gameSeconds = parseInt(this.$route.params.gametime + "") == 0 ? 60 * 5 : parseInt(this.$route.params.gametime + "");
      this.initialSeconds = parseInt(this.$route.params.wordtime + "") == 0 ? 30 : parseInt(this.$route.params.wordtime + "");
      this.gameType = this.$route.params.gametype + "";
      this.items = data[this.gameType] ;
    },
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
      this.disabled = false;
    },
  }
});
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div>
      <div class="p-4 flex items-center justify-center">
        <div class="text-4xl text-center">
          SCORE: {{ score * 10 }}
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
          <p class="game-font greys">{{ toGuess }}</p>
        </div>
      </div>
      <div class="py-8 flex justify-around">
        <img @click="isFalse" src="https://img.icons8.com/?size=48&id=fYgQxDaH069W&format=png" />
        <img @click="isTrue" src="https://img.icons8.com/?size=48&id=70yRC8npwT3d&format=png" />
      </div>
      <div class="p-4 flex items-center justify-center">
        <div class="text-2xl font-extralight text-center">
          {{ formattedTimeGame }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../style/css/common.css';
</style>
../data/data
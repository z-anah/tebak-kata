<script lang="ts">
import { defineComponent, ref } from "vue";
import * as data from "../data/data";

export default defineComponent({
  name: "App",
  components: {},
  data: () => {
    return {
      initialItems: [] as any,
      passedItems: [] as any,
      toPassItems: [] as any,
      timer: 0 as number,
      seconds: 0 as number,
      initialSeconds: 0 as number,
      gameSeconds: 0 as number,
      initialGameSeconds: 0 as number,
      toGuess: "",
      disabled: ref(false),
      score: 0,
      audioFail: new Audio("./fail.mp3"),
      audioSuccess: new Audio("./correct.mp3"),
      audioSkip: new Audio("./skip.mp3"),
      audioClicking: new Audio("./clicking.mp3"),
      gameType: "",
    };
  },
  created() {
    this.initMe();
    this.reset();
    this.timer = setInterval(() => {
      this.gameSeconds--;
      if (this.gameSeconds == 0) {
        this.gameEnd();
      } else if (this.gameSeconds == this.initialGameSeconds) {
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
  mounted() { },
  computed: {
    formattedTime() {
      let minutes = Math.floor(this.seconds / 60);
      let seconds = this.seconds % 60;
      return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    },
    formattedTimeGame() {
      let minutes = Math.floor(this.gameSeconds / 60);
      let seconds = this.gameSeconds % 60;
      return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    },
  },
  methods: {
    initMe() {
      this.seconds =
        parseInt(this.$route.params.wordtime + "") == 0
          ? 30
          : parseInt(this.$route.params.wordtime + "");
      this.initialSeconds =
        parseInt(this.$route.params.wordtime + "") == 0
          ? 30
          : parseInt(this.$route.params.wordtime + "");
      this.gameSeconds =
        parseInt(this.$route.params.gametime + "") == 0
          ? 60 * 3
          : parseInt(this.$route.params.gametime + "");
      this.initialGameSeconds =
        parseInt(this.$route.params.gametime + "") == 0
          ? 60 * 3
          : parseInt(this.$route.params.gametime + "");
      this.gameType = this.$route.params.gametype + "";
      this.initialItems = data[this.gameType];
      this.toPassItems = this.initialItems;
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
      const item = this.setPassedItems();
      this.toGuess = item.label;
      this.disabled = false;
    },
    setPassedItems() {
      let randomIndex = Math.floor(Math.random() * this.toPassItems.length);
      let randomItem = this.toPassItems[randomIndex];
      this.toPassItems.splice(randomIndex, 1);
      this.passedItems.push(randomItem);
      if (this.toPassItems.length == 0) {
        this.gameEnd();
      } else {
        return randomItem;
      }
    },
    gameEnd() {
      clearInterval(this.timer);
      this.$router.push("/result/" + this.score * 10);
    },
  },
});
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div>
      <div class="p-2 flex items-center justify-center">
        <div class="text-4xl text-center">SCORE: {{ score * 10 }}</div>
      </div>
      <div :class="{ shake: disabled }">
        <div class="p-2 flex items-center justify-center">
          <div class="text-2xl font-extralight text-center">
            {{ formattedTime }}
          </div>
        </div>
      </div>
      <div class="px-2 bg-white shadow-md flex items-center justify-center">
        <div class="text-[80px] my-[-4px] font-bold text-center">
          <p class="game-font">{{ toGuess }}</p>
        </div>
      </div>
      <div class="py-2 flex justify-center">
        <button class="buttonMe" @click="isFalse">
          <img src="https://img.icons8.com/?size=48&id=fYgQxDaH069W&format=png" />
        </button>
        <div class="w-20"></div>
        <button class="buttonMe" @click="isTrue">
          <img src="https://img.icons8.com/?size=48&id=70yRC8npwT3d&format=png" />
        </button>
      </div>
      <div class="p-2 flex items-center justify-center">
        <div class="text-2xl font-extralight text-center">
          {{ formattedTimeGame }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../style/css/common.css";

</style>
@/data/type/alatdapur
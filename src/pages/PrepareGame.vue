<script lang="ts">

import { defineComponent } from "vue";
import { onUnmounted } from 'vue';

export default defineComponent({
    name: 'App',
    components: {},
    methods: {
        test() {
            
            this.$router.push('/game/' + this.$route.params.gametype + '/' + this.gameTime + '/' + this.wordTime);
        },
    },
    data: () => {
        return {
            gameTime: 0 as number,
            wordTime: 0 as number,
        }
    },
    async mounted() {
    }
});

</script>

<template>
    <p>Game time</p>
    <input type="number" v-model="gameTime" placeholder="Game time" />
    <p>Word time</p>
    <input type="number" v-model="wordTime" placeholder="Word time" />
    <button @click="test">Let's Go</button>
</template>

<style scoped>

</style>
<!-- import header -->
<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
export default defineComponent({
  name: 'App',
  components: {
    Header
  }
})
</script>

<template>
    <Header/>
    <router-view></router-view>
</template>

<style scoped></style>

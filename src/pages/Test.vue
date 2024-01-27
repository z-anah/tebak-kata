<script lang="ts">

import { defineComponent } from "vue";
import { onUnmounted } from 'vue';

export default defineComponent({
  data: () => {
    return {
      gametype: [{
        img: "https://img.icons8.com/?size=80&id=HiAymINMciPx&format=png"
        , label: "Alat dapur", link:"/prepare-game/alatdapur"
      },{
        img:"https://img.icons8.com/?size=80&id=kfRfIRUL7jMk&format=png",
        label: "Kendaraan", link:"/prepare-game/kendaraan"
      },{
        img:"https://img.icons8.com/?size=80&id=n1nhpoqARIXs&format=png",
        label: "Hewan", link:"/prepare-game/hewan"
      },{
        img:"https://img.icons8.com/?size=80&id=ruNhag1HeD0V&format=png",
        label: "Binatang laut", link:"/prepare-game/binatanglaut"
      },{
        img:"https://img.icons8.com/?size=80&id=FUZiNN6aw2Rb&format=png",
        label:"pekerjaan", link:"/prepare-game/pekerjaan"
      },
      {
        img:"https://img.icons8.com/?size=80&id=LcVQQn9beLrS&format=png",
        label:"Logo", link:"/prepare-game/logo"
      }


    ] as any,
    }
  },
});
</script>

<template>
  <div class="flex items-center justify-center h-screen" >
    <div v-for="item in gametype" :key="item.label" class="w-32 h-32 mr-2 bg-white shadow-md flex items-center justify-center rounded-md">
      <router-link :to="item.link">
        <img :src="item.img" />
        {{item.label}}
      </router-link>
    </div>

  </div>

</template>

<style scoped></style>

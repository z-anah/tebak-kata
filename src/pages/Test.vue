<script lang="ts">
import { defineComponent } from "vue";
import { onUnmounted } from "vue";

export default defineComponent({
  data: () => {
    return {
      gametype: [
        {
          img: "https://img.icons8.com/?size=80&id=HiAymINMciPx&format=png",
          label: "Alat dapur",
        },
        {
          img: "https://img.icons8.com/?size=80&id=kfRfIRUL7jMk&format=png",
          label: "Kendaraan",
        },
        {
          img: "https://img.icons8.com/?size=80&id=n1nhpoqARIXs&format=png",
          label: "Hewan",
        },
        {
          img: "https://img.icons8.com/?size=80&id=ruNhag1HeD0V&format=png",
          label: "Binatang laut",
        },
        {
          img: "https://img.icons8.com/?size=80&id=FUZiNN6aw2Rb&format=png",
          label: "Pekerjaan",
        },
        {
          img: "https://img.icons8.com/?size=80&id=LcVQQn9beLrS&format=png",
          label: "Logo",
        },
        {
          img: "https://img.icons8.com/?size=80&id=3nOZtpH7KQrP&format=png",
          label: "Negara",
        },
        {
          img: "https://img.icons8.com/?size=80&id=ejmOimUK9P9a&format=png",
          label: "Buah",
        },
        {
          img: "https://img.icons8.com/?size=80&id=OLMeWjjLhRnQ&format=png",
          label: "Badan",
        },
        {
          img: "https://img.icons8.com/?size=80&id=ckEu7bKNlXmz&format=png",
          label: "Sayur",
        },
        {
          img:"https://img.icons8.com/?size=80&id=vtCME09aZ57B&format=png",
          label:"Dalam Tubuh",
        }, 
        {
          img:"https://img.icons8.com/?size=80&id=nr3bIWoY2G1H&format=png",
          label:"Baju",
        },
        {
          img:"https://img.icons8.com/?size=80&id=Hs4y0qsqaZ6G&format=png",
          label: "Warna",
        }
      ] as any,
    };
  },
  methods: {
    formatString(str: string) {
      return str.replace(/\s+/g, '').toLowerCase();
    }
  }
});
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="grid grid-cols-5 gap-4">
      <div v-for="item in gametype" :key="item.label"
        class="w-32 h-32 bg-white shadow-md flex items-center justify-center rounded-md">
        <router-link :to="'/prepare-game/'+ formatString(item.label)">
          <img :src="item.img" />
          {{ item.label }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

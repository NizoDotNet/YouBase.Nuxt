<script setup >
import {userStore} from "~/states/userStore";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
const uStore = userStore()

await uStore.getUser()

</script>

<template>

  <div v-if="uStore.isLoading" class="h-screen flex items-center justify-center" >
    <pulse-loader color="#38bdf8"></pulse-loader>
  </div>
  <NuxtLayout v-else>
    <NuxtLoadingIndicator />
    <NuxtPage class="container mx-auto p-2 m-2"/>
  </NuxtLayout>
</template>

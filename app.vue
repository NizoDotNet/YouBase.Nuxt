<script setup lang="ts">
import {userStore} from "~/states/userStore";

const uStore = userStore()
uStore.getUser()
</script>

<template>
  <NuxtLayout>
    <NuxtPage class="container mx-auto p-2 m-2"/>
  </NuxtLayout>
</template>

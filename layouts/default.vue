<script setup lang="ts">
import PrimveVueNavigationBar from "~/components/navigation/PrimveVueNavigationBar.vue";
import {userStore} from "~/states/userStore";

</script>

<template>
  <div class="default-layout ">
    <PrimveVueNavigationBar />
    <slot></slot>
  </div>
</template>

<style scoped>
</style>
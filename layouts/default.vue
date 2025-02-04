<script setup lang="ts">

import VerticalBar from "~/components/navigation/verticalBar.vue";
import PrimveVueNavigationBar from "~/components/navigation/PrimveVueNavigationBar.vue";
</script>

<template>
  <div class="default-layout">
    <PrimveVueNavigationBar />
    <slot></slot>
  </div>
</template>

<style scoped>
</style>
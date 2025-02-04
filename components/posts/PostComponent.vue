<script setup lang="ts">
import type {PostInterface} from "~/interfaces/postInterface";
defineProps({
  item: Object,
})
</script>

<template>
  <h2>{{ item?.id }}</h2>
</template>

<style scoped>

</style>
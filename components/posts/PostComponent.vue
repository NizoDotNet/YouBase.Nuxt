<script setup lang="ts">

const userId = ""
const props = defineProps({
  item: Object,
})
const isPostLiked: boolean = false;

</script>

<template>

  <Card style="width: 25rem; overflow: hidden">
    <template #header>
      <img alt="user header" :src="item?.imageUrl" />
    </template>
    <template #title>{{ item?.tittle }}</template>
    <template #content>
      <p class="m-0">
        {{ item?.description }}
      </p>
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button v-if="!isPostLiked" label="Like" severity="secondary" outlined class="w-full" icon="pi pi-heart"/>
        <Button v-else label="Like" severity="secondary" outlined class="w-full" icon="pi pi-heart-fill"/>
      </div>
    </template>
  </Card>

</template>

<style scoped>

</style>
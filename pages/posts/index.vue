<script setup>
const postService = usePostService();
const data = await postService.getData(1, 2)

</script>

<template>
  <PostsPostComponent v-for="item in data.items" :item="item"/>
</template>

<style scoped>

</style>
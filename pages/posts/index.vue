<script setup>
const postService = usePostService();
const data = await postService.getData(1, 2)
console.log(data)
</script>

<template>
  <div class="flex flex-col items-center">
    <PostsPostComponent class="m-2" v-for="item in data.items" :item="item"/>
  </div>
</template>

<style scoped>

</style>
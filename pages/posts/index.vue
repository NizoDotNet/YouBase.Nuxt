<script setup lang="ts">
import type {PostInterface} from "~/interfaces/postInterface";
import type {PagedResponseInterface} from "~/interfaces/pagedResponseInterface";

const postService = usePostService();

const data = ref<PagedResponseInterface<PostInterface>>();
let pageNumber: number = 1;
let pageSize: number = 10;
const getPosts = async () => {
  data.value = await postService.getData(pageNumber, pageSize)
};
getPosts();
</script>

<template>
  <div class="flex flex-col items-center">
    <PostsPostComponent class="m-2" v-for="item in data?.items" :item="item"/>
  </div>
</template>

<style scoped>

</style>
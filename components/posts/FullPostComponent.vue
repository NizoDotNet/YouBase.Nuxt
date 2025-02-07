<script setup lang="ts">
const props = defineProps({
  post: Object
})

const postService = usePostService()
const comments = ref(await postService.getComments(props.post?.id, 1, 5));
</script>

<template>
<div class="bg-gradient-to-bl">
  <div>
    <Image :src="post?.imageUrl"/>
  </div>
  <div class="comments">
    <p v-for="comment in comments.items" :key="comment.id">{{ comment.text }} - {{comment.user.nickname}}</p>
  </div>
</div>
</template>

<style scoped>

</style>
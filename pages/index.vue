<script setup lang="ts">

const postService = usePostService()
const chatService = useChatService()

const posts = await postService.getData(1, 5);
</script>

<template>
  <div class="grid grid-flow-col grid-rows-3 gap-2 justify-items-center">
    <div class="row-span-3">
      <PostsPostComponent v-for="post in posts.items" :key="post.id" :item="post" />
    </div>
    <div class="col-span-2">
<!--      <Avatar v-for="chat in chats.items" :ket="chat.chatId" label="P" class="mr-2" size="xlarge" shape="circle" />-->
    </div>
    <div class="col-span-2 row-span-2 ...">03</div>
  </div>
</template>

<style scoped>


</style>
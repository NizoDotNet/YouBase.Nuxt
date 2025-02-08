<script setup lang="ts">
const chatService = useChatService();
const chats = ref(await chatService.getData(1, 4));
console.log(chats.value)
</script>

<template>
  <div v-for="chat in chats.items" :key="chat.chatId">
    <NuxtLink :to="'/chats/' + chat.chatId">
     {{chat.groupName}}
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>
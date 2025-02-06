<script setup>

import {userStore} from "~/states/userStore";

const props = defineProps({
  item: Object,
})
const uStore = userStore()
const isPostLiked = ref(props.item?.usersWhoLiked.some(c => c.id === uStore.user?.id));
const postService = usePostService()

const like = async () => {
  console.log('like pressed')
  try {

    await postService.likePost(props.item?.id);
    isPostLiked.value = true;
  } catch (e) {

  }
}

const disLike = async () => {
  console.log('dislike pressed')
  try {

    await postService.dislikePost(props.item?.id);
    isPostLiked.value = false;
  } catch (e) {

  }
}
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
        <Button @click="like" v-if="!isPostLiked" label="Like" severity="secondary" outlined class="w-full" icon="pi pi-heart"/>
        <Button @click="disLike" v-else label="Like" severity="secondary" outlined class="w-full" icon="pi pi-heart-fill"/>
      </div>
    </template>
  </Card>

</template>

<style scoped>

</style>
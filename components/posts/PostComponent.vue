<script setup>

import {userStore} from "~/states/userStore";

const props = defineProps({
  item: Object,
})
const uStore = userStore()
const isPostLiked = ref(props.item?.usersWhoLiked.some(c => c.id === uStore.user?.id));
const postService = usePostService()
const showFullPost = ref(false)

const like = async () => {
  console.log('like pressed')
  try {
    const value = await postService.likePost(props.item?.id);
    if(value) {
      isPostLiked.value = true;
      props.item?.usersWhoLiked.push({});
    }


  } catch (e) {

  }
}

const disLike = async () => {
  console.log('dislike pressed')
  try {
    const value = await postService.dislikePost(props.item?.id);
    if(value) {
      isPostLiked.value = false;
      props.item?.usersWhoLiked.pop();

    }
  } catch (e) {

  }
}
</script>

<template>

  <Card class="m-2" style="width: 25rem; overflow: hidden">
    <template v-if="item?.imageUrl" #header>
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
        <Button :label="item?.usersWhoLiked.length" @click="like" v-if="!isPostLiked" label="Like" severity="secondary" outlined class="w-full" icon="pi pi-heart"/>
        <Button :label="item?.usersWhoLiked.length" @click="disLike" v-else label="Like" severity="secondary" outlined class="w-full" icon="pi pi-heart-fill"/>
      </div>
    </template>
  </Card>
  <button @click="showFullPost = !showFullPost">show</button>
  <div v-if="showFullPost">
    <PostsFullPostComponent :post="item"/>
  </div>
</template>

<style scoped>

</style>
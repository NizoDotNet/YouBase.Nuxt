<script setup lang="ts">
import {userStore} from "~/states/userStore";

const uStore = userStore()
const logOut = async () => await uStore.logOut()
</script>

<template>
  <Toolbar class="m-1" style="padding: 0; padding-right: 0.5rem;">
    <template #start>
      <NuxtLink to="/" class="flex items-center rtl:space-x-reverse">
        <div class="flex items-center gap-2">
          <img src="/images/YouBase.png" alt="" width="60px" height="60px" />
        </div>
        <span>YouBase</span>
      </NuxtLink>

    </template>
    <template #center>
      <IconField>
        <InputIcon>
          <i class="pi pi-search" />
        </InputIcon>
        <InputText placeholder="Search" />
      </IconField>

    </template>
    <template #end>
      <div v-if="uStore.isAuthenticated" class="flex items-center gap-2 m-2" >
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" style="width: 32px; height: 32px" />
        <UButton @click="logOut">Log Out</UButton>

      </div>
      <div v-else>
        <NuxtLink to="/auth/register" class="me-2">
          <UButton>
            Register
          </UButton>
        </NuxtLink>
        <NuxtLink to="/auth/login">
          <UButton color="white">
            Log In
          </UButton>
        </NuxtLink>
      </div>
    </template>
  </Toolbar>
</template>

<style scoped>

</style>
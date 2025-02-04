<script setup lang="ts">
</script>

<template>
  <Toolbar class="m-0.5 ps-1 pe-1" style="padding-bottom: 0px; padding-top: 0px;">
    <template #start>
      <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/images/YouBase.png" width="100px" height="100px" alt="">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">YouBase</span>
      </NuxtLink>
    </template>
    <template #center>
      <IconField>
        <InputIcon>
          <i class="pi pi-search" />
        </InputIcon>
        <InputText placeholder="Search" size="large"/>
      </IconField>
    </template>

    <template #end>
      <Avatar class="m-1" size="large" shape="circle" image="/images/ava.png" />
      <NuxtLink  to="/chats">
        <Button label="Log Out"/>
      </NuxtLink>
    </template>
  </Toolbar>
</template>

<style scoped>

</style>
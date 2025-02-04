<script setup lang="ts">
</script>

<template>
  <Toolbar class="m-1 p-1" style="padding: 0">
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
      <div class="flex items-center gap-2 m-2">
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" style="width: 32px; height: 32px" />
        <UButton >Log Out</UButton>
      </div>
    </template>
  </Toolbar>
</template>

<style scoped>

</style>
<script setup lang="ts">
import {userStore} from "~/states/userStore";

const registerData = reactive({
  email: "",
  password: "",
  confirmPassword: "",
  nickname: ""
})

const uStore = userStore()

const register = async () => {
  if(registerData.password === registerData.confirmPassword) {
    await uStore.registerUser(registerData)
  }
}

</script>

<template>
  <div>
    <form @submit.prevent="register" class="flex justify-center flex-col gap-4 items-center">
      <div class="flex flex-col gap-1">
        <InputText style="width: 206.67px; height: 41.33px" v-model="registerData.nickname" name="nickname" type="text" placeholder="Nickname" />
      </div>
      <div class="flex flex-col gap-1">
        <InputText style="width: 206.67px; height: 41.33px" v-model="registerData.email" name="email" autocomplete="email" type="email" placeholder="Email" />
      </div>
      <div class="flex flex-col gap-1">
        <InputText style="width: 206.67px; height: 41.33px" v-model="registerData.password" name="email" type="text" placeholder="Password" />
      </div>
      <div class="flex flex-col gap-1">
        <Password v-model="registerData.confirmPassword" placeholder="Repeat password" style="border-color: red;" />
        <Message v-if="registerData.confirmPassword !== '' && registerData.password !== registerData.confirmPassword" size="small" severity="warn" variant="simple">Passwords must be same!</Message>
      </div>
      <Button style="width: 206.67px; height: 41.33px" type="submit" severity="secondary" label="Submit" />
    </form>
  </div>
</template>

<style scoped></style>
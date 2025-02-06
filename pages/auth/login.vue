<script setup lang="ts">
import {userStore} from "~/states/userStore";

const uStore = userStore()
const loginData = reactive({
  email: "",
  password: ""
})
const logData = () => console.log(loginData);
const login = async () => {
  await uStore.loginUser(loginData)
}
</script>

<template>
  <div>
    <form @submit.prevent="login" class="flex justify-center flex-col gap-4 items-center">
      <div class="flex flex-col gap-1">
        <InputText style="width: 206.67px; height: 41.33px" v-model="loginData.email" name="email" type="email" placeholder="Email" />
      </div>
      <div class="flex flex-col gap-1">
        <Password v-model="loginData.password" placeholder="Password" />
      </div>
      <Button style="width: 206.67px; height: 41.33px" type="submit" severity="secondary" label="Submit" />
    </form>
  </div>
</template>


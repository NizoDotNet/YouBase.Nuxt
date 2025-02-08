<script setup lang="ts">
import {HubConnectionBuilder} from "@microsoft/signalr";

const route = useRoute()
const messages = ref();
const myMessage = ref();
messages.value = [{chatMessages: [{text:'hi', id:1}]}]

const isConnected = ref(false)

const connection = new HubConnectionBuilder()
    .withUrl("https://localhost:7289/api/chats/connectchat", { accessTokenFactory(): string | Promise<string> {
        const jwtToken = useCookie('JwtToken').value
        return jwtToken != null ? jwtToken : ""
      }})
    .withAutomaticReconnect()
    .build()
connection.on("ReceiveMessage", (message) => {
  messages.value = [...messages.value, message]
})
async function startConnection() {
  try {
    await connection.start()
    await connection.invoke('Join', { chatId: route.params.id })
    console.log(connection)
    isConnected.value = true
  } catch(er) {
    console.log(er);
  }
}

startConnection()

async function sendMessage() {
  await connection.invoke("SendMessage", myMessage.value)
  myMessage.value = ""
}

async function closeConnection() {
  await connection.stop()
  isConnected.value = false
}
</script>

<template>
  <button v-if="isConnected" @click="closeConnection" class="bg-red-700">Close</button>
  <button v-else @click="startConnection" class="bg-green-700">Open</button>

  <p v-for="message in messages.chatMessages" :key="message.id">
    {{ message.text }}
  </p>
  <InputText v-model="myMessage"/>
  <Button label="Send" @click="sendMessage" />
</template>

<style scoped>

</style>
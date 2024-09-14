<template>
  <header class="">
    <HeaderBar />
  </header>

  <MainScreen class="MainScreen" :chatMessages="chatMessages" />
  <!-- Recibimos el emit messageSent del componente SendBar -->
  <SendBar class="SendBar" :loadingStatus="loadingStatus" @message-sent="handleMessageSent" />
</template>

<script setup lang="ts">
// Importamos los componentes y dependencias
import MainScreen from './components/MainScreen.vue'
import HeaderBar from './components/HeaderBar.vue'
import SendBar from './components/SendBar.vue'
import axios from 'axios'
import { ref } from 'vue'

const chatMessages = ref<ChatMessage[]>([])
const loadingStatus = ref(false)

// Función que maneja el evento de enviar el mensaje
const handleMessageSent = async (messageData: ChatMessage) => {
  loadingStatus.value = true
  chatMessages.value.push(messageData, { sender: 'bot', message: 'Cargando...' })
  // Utilizamos axios para la petición a la API de YESNO
  await axios
    .get('https://yesno.wtf/api')
    .then((response) => {
      const botMessage = {
        sender: 'bot',
        message: response.data.answer,
        image: response.data.image
      }
      chatMessages.value.splice(-1, 1, botMessage)
    })
    .catch((error) => {
      console.log(error)
      const botMessage = {
        sender: 'bot',
        message: '⚠️ Ha ocurrido un problema, intente de nuevo más tarde'
      }
      chatMessages.value.splice(-1, 1, botMessage)
    })
    .finally(() => {
      loadingStatus.value = false
    })
}
</script>

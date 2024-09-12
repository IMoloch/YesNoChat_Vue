<template>
  <div class="min-h-screen flex flex-col">
    <header class="sticky top-0">
      <HeaderBar />
    </header>

    <main>
      <MainScreen :chatMessages="chatMessages" />
    </main>
    <footer class="sticky bottom-0">
      <SendBar @messageSent="handleMessageSent" />
    </footer>
  </div>
</template>

<script setup lang="ts">
import MainScreen from './components/MainScreen.vue'
import HeaderBar from './components/HeaderBar.vue'
import SendBar from './components/SendBar.vue'

import { ref } from 'vue'

const chatMessages = ref([
  {
    sender: 'user',
    message: "Hey, how's your day going?"
  },
  {
    sender: 'bot',
    message: 'Not too bad, just a bit busy. How about you?',
    image: 'https://yesno.wtf/assets/yes/5-64c2804cc48057b94fd0b3eaf323d92c.gif'
  }
])

const handleMessageSent = (userMessage: string) => {
  console.log(userMessage)
}
</script>

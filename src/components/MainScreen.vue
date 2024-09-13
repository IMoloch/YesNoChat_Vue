<template>
  <div class="ChatBox">
    <div class="MessageLine" v-for="message in chatMessages">
      <div class="UserMessage" v-if="message.sender === 'user'">
        <div class="bg-blue-300 text-black p-2 m-1 rounded-lg max-w-lg break-words">
          <p>{{ message.message }}</p>
        </div>
      </div>
      <div class="BotMessage" v-if="message.sender === 'bot'">
        <div class="bg-gray-400 text-black p-2 m-1 rounded-lg max-w-lg break-words">
          {{ message.message }}
        </div>
      </div>
      <div class="BotMessage" v-if="message.sender === 'bot' && message.image">
        <div class="bg-gray-400 text-black p-2 m-1 rounded-lg max-w-lg">
          <img :src="message.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  chatMessages: ChatMessage[]
}>()
</script>

<style scoped>
.ChatBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.MessageLine {
  width: 100%;
  max-width: 56rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 0.5rem;
}

.BotMessage {
  max-width: fit-content;
  justify-content: start;
}

.UserMessage {
  display: flex;
  justify-content: flex-end;
}
</style>

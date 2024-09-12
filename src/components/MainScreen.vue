<template>
  <div class="flex-1 overflow-y-auto p-2">
    <div class="flex flex-col mb-2" v-for="message in chatMessages">
      <div class="flex justify-end" v-if="message.sender === 'user'">
        <div class="bg-blue-200 text-black p-2 rounded-lg max-w-md">
          {{ message.message }}
        </div>
      </div>
      <div class="flex" v-if="message.sender === 'bot'">
        <div class="bg-gray-300 text-black p-2 rounded-lg max-w-md">
          {{ message.message }}
        </div>
      </div>
      <div class="flex" v-if="message.sender === 'bot' && message.image">
        <div class="bg-gray-300 text-black p-2 rounded-lg max-w-md">
          <img :src="message.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ChatMessage {
  sender: string
  message: string
  image?: string
}

const props = defineProps<{
  chatMessages: ChatMessage[]
}>()
</script>

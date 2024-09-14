<template>
  <form @submit.prevent="onSubmit">
    <div class="bg-gray-100 p-4 flex">
      <input
        type="text"
        placeholder="Escribe tu mensaje..."
        class="flex-1 border rounded-full px-4 py-2 focus:outline-none"
        v-model="userMessage"
      />
      <button
        class="bg-sky-900 text-white rounded-full p-2 ml-2 focus:outline-none"
        :class="[userMessage.trim() && !loadingStatus ? 'hover:bg-blue-600' : '']"
        :disabled="!userMessage.trim() || loadingStatus"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </svg>
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const userMessage = ref('')
// Definimos los props y su tipado
defineProps<{
  loadingStatus: boolean
}>()

// Definimos el Emit personalizado de este componente
const emit = defineEmits(['messageSent'])

// Funcion que maneja el evento de del Formulario
const onSubmit = () => {
  if (!userMessage.value.trim()) {
    return null
  }
  const messageData = {
    sender: 'user',
    message: userMessage.value
  }

  //Declaramos que vamos a pasar por el Emit "messageSent" con el argumento "messageData" 
  emit('messageSent', messageData)
  userMessage.value = ''
}
</script>

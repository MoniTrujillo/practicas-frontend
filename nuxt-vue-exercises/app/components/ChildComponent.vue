<script setup lang="ts">
const emit = defineEmits<{
  saludar: [mensaje: string]
}>()

function saludar() {
  emit('saludar', '¡Hola, papá!')
}
</script>

<template>
  <button @click="saludar">Saludar al padre</button>
</template>
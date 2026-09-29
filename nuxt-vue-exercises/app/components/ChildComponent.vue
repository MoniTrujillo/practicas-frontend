<script setup lang="ts">
const emit = defineEmits<{
  saludar: [mensaje: string]
}>()

const mensajeDelPadre = inject<string>('mensajeDelPadre', 'Sin mensaje')

function saludar() {
  emit('saludar', '¡Hola, papá!')
}
</script>

<template>
  <div>
    <p>{{ mensajeDelPadre }}</p>
    <button @click="saludar">Saludar al padre</button>
  </div>
</template>
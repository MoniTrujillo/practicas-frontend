<script setup lang="ts">
const mensaje = ref('')

function recibirSaludo(texto: string) {
  mensaje.value = texto
}
</script>

<template>
  <div>
    <p v-if="mensaje">{{ mensaje }}</p>
    <ChildComponent @saludar="recibirSaludo" />
  </div>
</template>
<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})

function volverAlInicio() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="p-4">
    <TheTitle>{{ error?.statusCode }}</TheTitle>
    <p class="my-4">{{ error?.statusMessage || error?.message }}</p>
    <button class="rounded bg-brand px-4 py-2 text-white" @click="volverAlInicio">
      Volver al inicio
    </button>
  </div>
</template>
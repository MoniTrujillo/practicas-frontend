<script setup lang="ts">
const { count, increment, decrement, reset } = useCounter()

const doubled = computed(() => count.value * 2)

const mensaje = ref('')

watch(
  count,
  (nuevoValor) => {
    if (nuevoValor === 0) {
      mensaje.value = 'Estás en el valor mínimo'
    } else if (nuevoValor === 10) {
      mensaje.value = 'Estás en el valor máximo'
    } else {
      mensaje.value = 'Estás en los parámetros adecuados'
    }
  },
  { immediate: true }
)
</script>

<template>
  <div>
    <TheTitle>Contador: {{ mensaje }}</TheTitle>
    <p :class="{ 'text-green-500': count >= 10 }">{{ count }}</p>
    <TheTitle>Doble: {{ doubled }}</TheTitle>
    <div class="flex gap-2">
      <button v-if="count > 0" class="rounded bg-brand px-4 py-2 text-white" @click="decrement">Decrement</button>
      <button v-if="count < 10" class="rounded bg-brand px-4 py-2 text-white" @click="increment">Increment</button>
      <button class="rounded bg-brand px-4 py-2 text-white" @click="reset">Reset</button>
    </div>
  </div>
</template>
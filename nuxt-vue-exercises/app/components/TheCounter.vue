<script setup lang="ts">
const { count, increment, decrement, reset } = useCounter()

const doubled = computed(() => count.value * 2)
</script>

<template>
  <div>
    <TheTitle>Contador</TheTitle>
    <p :class="{ 'text-green-500': count >= 10 }">{{ count }}</p>
    <TheTitle>Doble: {{ doubled }}</TheTitle>
    <div class="flex gap-2">
      <button v-if="count > 0" class="rounded bg-brand px-4 py-2 text-white" @click="decrement">Decrement</button>
      <button v-if="count < 10" class="rounded bg-brand px-4 py-2 text-white" @click="increment">Increment</button>
      <button class="rounded bg-brand px-4 py-2 text-white" @click="reset">Reset</button>
    </div>
  </div>
</template>
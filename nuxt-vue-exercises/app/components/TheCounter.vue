<script setup lang="ts">
const count = ref(0)

function increment() {
  count.value++
}

function decrement() {
  count.value--
}
</script>

<template>
  <div>
    <TheTitle>Contador</TheTitle>
    <p>{{ count }}</p>
    <button v-if="count > 0" class="rounded bg-brand px-4 py-2 text-white" @click="decrement">Decrement</button>
    <button v-if="count < 10" class="rounded bg-brand px-4 py-2 text-white" @click="increment">Increment</button>
  </div>
</template>

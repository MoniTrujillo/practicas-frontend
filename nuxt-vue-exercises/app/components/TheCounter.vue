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
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>
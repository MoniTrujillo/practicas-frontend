<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="p-4">
    <TheTitle>Título: {{ route.params.title }}</TheTitle>
    <p class="my-4 text-xl">Categoría: {{ route.params.category }}</p>
  </div>
</template>
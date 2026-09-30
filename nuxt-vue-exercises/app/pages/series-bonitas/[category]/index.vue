<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="p-4">
    <TheTitle>Series de la categoría: {{ route.params.category }}</TheTitle>
    <NuxtLink
      to="/series-bonitas/aventuras/spiderman-episodio-1"
      class="my-4 inline-block rounded bg-brand px-4 py-2 text-white"
    >
      Episodio 1 de Spiderman
    </NuxtLink>
  </div>
</template>
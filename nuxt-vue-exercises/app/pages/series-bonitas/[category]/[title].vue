<script setup lang="ts">
const route = useRoute()
const categorias = ['aventuras', 'comedia', 'terror']

if (!categorias.includes(String(route.params.category))) {
  throw createError({ statusCode: 404, statusMessage: 'Categoría no encontrada' })
}

useSeoMeta({
  title: () => `${route.params.title} - ${route.params.category}`,
  description: () => `Mira ${route.params.title} de la categoría ${route.params.category}`,
})
</script>

<template>
  <div class="p-4">
    <TheTitle>Título: {{ route.params.title }}</TheTitle>
    <p class="my-4 text-xl">Categoría: {{ route.params.category }}</p>
  </div>
</template>
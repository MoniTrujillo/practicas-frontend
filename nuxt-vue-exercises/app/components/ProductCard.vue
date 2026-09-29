<script setup lang="ts">
import type { Product } from '~/types/product'

defineProps<Omit<Product, 'id'>>()
</script>

<template>
  <div class="rounded border p-4">
    <img :src="image" :alt="title" class="mb-2 w-full rounded" />
    <h2 class="text-lg font-bold">{{ title }}</h2>
    <p class="mb-2">{{ description }}</p>
    <p class="mb-2 font-bold">${{ price }}</p>
    <button class="rounded bg-brand px-4 py-2 text-white">Comprar</button>
  </div>
</template>
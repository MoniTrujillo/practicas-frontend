<script setup lang="ts">
import type { ProductsResponse } from '~/types/product'
import { useCounterStore } from '~/stores/counter'

definePageMeta({ layout: 'catalogo' })

useSeoMeta({
  title: 'Catálogo',
  description: 'Catálogo de productos traídos de una API.',
})

const counter = useCounterStore()

const { data, pending, error, refresh } = await useFetch<ProductsResponse>(
  'https://dummyjson.com/products?limit=12',
)
</script>

<template>
  <div class="p-4">
    <TheTitle>Catálogo</TheTitle>
    <p>Contador: {{ counter.count }}</p>

    <p v-if="pending" class="my-4">Cargando productos...</p>
    <p v-else-if="error" class="my-4">
      No se pudieron cargar los productos. Intenta de nuevo.
    </p>
    <div v-else-if="data" class="my-4 grid gap-4 sm:grid-cols-3">
      <ProductCard
        v-for="product in data.products"
        :key="product.id"
        :title="product.title"
        :description="product.description"
        :price="product.price"
        :thumbnail="product.thumbnail"
      />
    </div>

    <div class="flex gap-2">
      <button class="rounded bg-brand px-4 py-2 text-white" @click="refresh()">
        Recargar
      </button>
      <button class="rounded bg-brand px-4 py-2 text-white" @click="navigateTo('/')">
        Ir al home
      </button>
    </div>
  </div>
</template>
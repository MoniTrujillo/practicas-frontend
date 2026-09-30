<script setup lang="ts">
import { products } from '~/data/mock'
import { useCounterStore } from '~/stores/counter'

definePageMeta({ layout: 'catalogo' })

const counter = useCounterStore()
</script>

<template>
  <div class="p-4">
    <TheTitle>Catálogo</TheTitle>
    <p>Contador: {{ counter.count }}</p>
    <div class="my-4 grid gap-4 sm:grid-cols-3">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :image="product.image"
        :title="product.title"
        :description="product.description"
        :price="product.price"
      />
    </div>
    <button class="rounded bg-brand px-4 py-2 text-white" @click="navigateTo('/')">
      Ir al home
    </button>
  </div>
</template>
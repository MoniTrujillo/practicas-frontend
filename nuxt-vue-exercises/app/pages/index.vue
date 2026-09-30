<script setup lang="ts">
useSeoMeta({
  title: 'Inicio',
  description: 'Página de inicio con el contador y el menú.',
})
</script>

<template>
  <div>
     <TheMenu />
    <TheCounter />
    <ParentComponent />
    <button class="m-4 rounded bg-brand px-4 py-2 text-white" @click="navigateTo('/catalogo')">
      Ir al catálogo
    </button>
  </div>
</template>
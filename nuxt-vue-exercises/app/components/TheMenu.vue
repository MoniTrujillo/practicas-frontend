<script setup lang="ts">
import IconFacebook from '~/components/IconFacebook.vue'
import IconInstagram from '~/components/IconInstagram.vue'

const icons = [
  { id: 1, name: 'Facebook', component: IconFacebook },
  { id: 2, name: 'Instagram', component: IconInstagram },
]
</script>

<template>
  <nav class="flex gap-4 p-4 text-brand">
    <component
      :is="icon.component"
      v-for="icon in icons"
      :key="icon.id"
      class="h-6 w-6"
    />
  </nav>
</template>
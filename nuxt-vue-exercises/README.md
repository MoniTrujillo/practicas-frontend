nuxt-vue-exercises

 Estructura

  app/app.vue: que en este caso es el componete principal 
   app/layouts/default.vue  el layout default que uno debe de crear  
   public   que son  archivos estáticos
   nuxt.config.ts aquí agregué los módulos de Tailwind y Pinia
    tailwind.config.js.  aquí puse mis colores y fuentes
    package.json` las dependencias del proyecto

 Estilos
En tailwind defini los colores 



use pnpm porque es más seguro 
pnpm install
pnpm dev

Abrir http://localhost:3000



Respuesta del ejercicio 4 
¿Hay alguna forma de mejorar el código?

Sí: en lugar de escribir count++ dentro del template,usar una funcion para incrementar y decrementar.


Ejercicio 13 - Soluciona los errores

RESPUESTAS 

1. useCounter.ts

Error: la función no devuelve nada, entonces desde un componente no puedo usar count ni increment


import { ref } from "vue";

export function useCounter() {
  const count = ref(0);

  function increment() {
    count.value++;
  }

  return { count, increment };
}


asi que se agrega tambien un return 

2. Lista con v-for

Error: key=index no es buena idea porque si la lista cambia de orden o se borra un elemento, Vue puede reutilizar mal los elementos

```

<script setup>
import { ref } from "vue";

const items = ref(["Apple", "Banana", "Cherry"]);
</script>
<template>
  <ul>
    <li v-for="item in items" :key="item">
      {{ item }}
    </li>
  </ul>
</template>
```



3. Contador con v-if

Errores:
 Usa `<script>` en lugar de `<script setup>`, y así la variable counter  no llega al template.

 Use == y es mejor ===  porque es más seguro

```
<script setup>
import { ref } from "vue";

const counter = ref(0);
</script>
<template>
  <p v-if="counter === 10">Número, {{ counter }}</p>
</template>
```
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


RESPUESTAS DEL EJERCICIO 20 


1.¿Cuándo se usa useFetch y cuándo $fetch? (Pista: uno es para cargar la página, el otro para responder a una interacción del usuario.)

useFerch es a lo que e usuario tiene acceso si que lo pida o sea cargan tal cual es la informacion que ocupa ver y el otro el $fetch es la informacion que el solicita 

2. Si llamas a $fetch directamente en el <script setup>, ¿qué problema tienes en SSR?

a lo que entiendo si directamente pones el fetch en el script pasa que el usuario entre a la pagina entonces nux carga el html y se lo muestra al usuario porque esta pidiendo esa info, pero luego vuelve como a encontrar el setup y la carga otra vez, entonces hace la peticion dos veces y eso alenta las cosas 



3.¿Qué diferencia hay entre useFetch y useAsyncData?

que use fetch es más especifica y trae datos de las api encambio el otro es mas generico 

4. Abre las herramientas de desarrollo, recarga la página y mira si la petición sale del navegador o no. ¿Por qué?
Si  porque la hizo el servidor y mandó los datos ya listos. Si
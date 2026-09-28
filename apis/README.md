# APIs - Ejercicio 1

## Lo que hice
- `getPokemon(name)`: trae un pokemon de la PokeAPI. Sirve para cualquier nombre.
- Reuse el tipo `Pokemon` y el type guard `isPokemon` del ejercicio 5 de TypeScript.
- Revise `response.ok` para detectar errores como el 404.
- Use `Promise.allSettled` para pedir tres pokemon y ver cuales salieron bien y cuales mal.

## Respuestas
**1. ¿Cuantas formas de fallar tiene la peticion? ¿Se detectan igual?**
Varias, y no se detectan igual:
- No hay internet: `fetch` falla y se atrapa con `catch`.
- La API responde 404 o 500: `fetch` NO falla, hay que revisar `response.ok`.
- La respuesta no es un JSON valido: `response.json()` falla.
- Los datos llegan con otra forma: lo detecta el type guard.

**2. ¿Diferencia entre `Promise.all` y `Promise.allSettled`?**
Si una peticion falla, `Promise.all` falla completo. `Promise.allSettled` espera todas y dice cual salio bien y cual mal. En el punto 4 conviene `allSettled`.

**3. ¿Por que no basta un `console.log` del error?**
Porque solo lo muestra y el programa sigue como si nada. Hay que decidir que hacer: lanzar el error, avisar al usuario o usar un valor por defecto.
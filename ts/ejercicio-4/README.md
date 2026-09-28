Ejercicio 4 - TypeScript: genéricos y utility types

Reutilice los tipos que ya tenia en lugar de copiarlos.



Respuestas
1.¿Qué ventaja tiene Pick<Dog, "name" | "race"> frente a escribir un interface DogPreview a mano?

El tipo queda ligado a Dog. Si cambias el tipo de name o race en Dog, DogPreview se actualiza solo pero con una interface a mano yo tendria  dos definiciones que mantener y podrían quedar distintas y no tener nada que ver.

2. Si mañana añades un campo a Dog, ¿qué le pasa a DogWithoutAge?

nada, o sea literal se añade solo el nuevo campo



3. ¿Readonly protege también los objetos anidados?

No solo protege el primer nivel  no puedes reasignar frozen.name, pero si una propiedad contiene un objeto, ese contenido sí se puede modificar.
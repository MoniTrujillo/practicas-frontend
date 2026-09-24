Ejercicio 5 


1. Optional chaining (?.): uso ?. para acceder a propiedades que podrían no existir, sin que el codigo truene. response.user?.address?.street da undefined en vez de error, aunque street no exista.

2. Nullish coalescing (??): uso ?? para poner un valor por defecto SOLO si lo de la izquierda es null o undefined. response.user?.address?.country ?? "España" da "España" porque country no existe.



3. Destructuring con valor por defecto: const { name, role = "invitado" } = response.user extrae name y role en una sola linea, y si role no existe en el objeto, usa "invitado" automaticamente.

5. Spread: uso response.user para copiar todas sus propiedades a un objeto nuevo, y despues sobreescribo la propiedad 

6. Rest: la funcion sumar  junta todos los argumentos que le pases en un array llamado numeros, sin importar cuantos sean, y despues uso reduce para sumarlos todos.

Preguntas

¿Cuándo usarías || y cuándo ???

1. Usaria || cuando quiero reemplazar cualquier valor falsy 0, "", null, undefined, false  Y Usaria  ??  cuando solo quiero reemplazar si es especificamente null o undefined

¿Qué devuelve ?. cuando la propiedad no existe?
2. ?. devuelve undefined cuando la propiedad no existe, en vez de lanzar un error.

El spread hace una copia superficial. ¿Qué significa eso y qué problema puede darte con el objeto address?

3. Que el spread haga una copia superficial significa que copia el primer nivel del objeto, pero si una propiedad es otro objeto como en el caso en el que usamos address , esa propiedad interna sigue siendo la misma referencia que el original, no una copia real por eso en el punto 5 tuve que hacer spread tambien dentro de address, para copiarlo de verdad.
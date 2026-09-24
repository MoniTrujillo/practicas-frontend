Ejercicio 6 - Map y Set


Parte 1: Map

Cree el map como decia el ejercicio con new Map() y use set() para añadir cada par clave-valor y  use get() para leer un valor por su clave, has() para comprobar si existe una clave, size para el tamaño, forEach para recorrerlo, delete() para quitar un elemento y clear() para vaciarlo completo.

lo que dice que hay que revisar 

myMap.get("funcion")("perro") funciona porque get("funcion") regresa la funcion findAnimal, y el ("perro") de al lado la llama inmediatamente con ese argumento que como tal tendriamos lo de buscar al perro 

moroso y agarrado apuntan como tal al mismo  user, no a una copia. eso quiere decir que por eso es que vemos que el user age se ve reflejado en ambos 

Usar un objeto como clave (myMap.set(user, ...))  a lo que entendi funciona para leerlo despues con el mismo , pero no va a funcionar  con un objeto nuevo aunque tenga el mismo contenido, 

 Set
Para quitar duplicados de un array, use new Set(array) y despues lo converti de vuelta a array con el spread [...set]. Para un Set vacio use add() para agregar, has() para comprobar si existe algo, delete() para quitarlo, y forEach para recorrerlo.

es lo mismo que con map, set compara por referencia, no por contenido, y esos dos objetos son distintos aunque se vean iguales.


Preguntas


1.¿Cuándo usarías un Map y cuándo un objeto normal?

Usaria un Map cuando necesito que las claves puedan ser de cualquier tipo no solamente string y tambien cuando importa el orden  y usaria un objeto normal para cosas mas simples,como estructuras ya fijas.

2. ¿Qué puede ser clave en un Map que no puede serlo en un objeto?

En un Map, la clave a lo que entiendo puede ser cualquier cosa es decir  un objeto, una funcion, un array y en un objeto normal no puedoo o no puede ser cualquier cosa siempre sera un string, entonces puede ser una clave una funcion y en el objeto normal nunca lo sera.

3. ¿Cómo se recorre un objeto y cómo un Map? ¿Cuál garantiza el orden de inserción?

Un objeto se recorre con Object.keys() y  Object.values()  con un for each y un Map se recorre directamente con su propio forEach o con for of  Map es el que garantiza el orden de insercion por que un objeto normal supongo que tambien pero no de una manera tan segura 

4. ¿Cuándo usarías un Set y cuándo un array?


Usaria un Set cuando quiero una coleccion de valores que son unicos , sin duplicados mientras que array  usaria cuando si necesito duplicados. 


5. ¿Por qué new Set no quita los objetos duplicados, y cómo lo resolverías si los datos vienen de una API con registros repetidos?

new Set no quita los objetos duplicados porque compara por que no esta comparando por  el contenido de las propiedades que tiene  Si los datos vienen de una API con registros repetidos, lo resolveria usando un Map con el id  como clave.

6. Map y Set no se pueden pasar a JSON.stringify directamente. Pruébalo y di qué sale. ¿Cómo lo guardarías en localStorage?


Da como resultado {} o sea que no trae nada  porque JSON.stringify no sabe como ponerlos como serializados .
 
Ejercicio 4 

Usé un método distinto para cada punto, sin usar ningún for.

1. Para sacar solo los nombres usé map, porque map recorre el array y regresa uno nuevo con lo que le digas .

2. Para el stock usé filter, porque filter se queda solo con los que cumplen la condicion que le pones, en este caso stock mayor a 0.

3. Para buscar el id 4 usé find, porque find regresa solo UN elemento (el primero que encuentra), no un array completo como filter.

4. Para el total del inventario usé reduce, que es el que más me costó entender. Reduce va sumando (o acumulando) un valor mientras recorre todo el array, aqui fui sumando price por stock de cada producto.

5. Para saber si hay alguno de mas de 500 usé some, que pregunta si AL MENOS UNO cumple la condicion y regresa true o false.

6. Para saber si todos estan bajo 1000 usé every, que pregunta si TODOS cumplen, tambien regresa true o false.

7. Para ordenar por precio usé sort, pero tambien depende porque sort sipuede  modificar el array original. Para evitarlo hice una copia con [...products] antes de ordenar, asi el products de arriba se queda intacto.

8. Para los perifericos con el precio subido combiné filter (para quedarme solo con los de esa categoria) y despues map (para regresar cada uno con el precio multiplicado por 1.1).

 PREGUNTAS

 ¿Qué diferencia hay entre map y forEach?
1. map regresa un array nuevo con los resultados, forEach no regresa nada, solo sirve para hacer algo con cada elemento.

¿Qué devuelve find si no encuentra nada? ¿Y filter?
2. find regresa undefined si no encuentra nada. filter regresa un array vacio [], no undefined.

Por qué es mala idea mutar el array original?
3. Es mala idea mutar el array original porque si en otra parte de tu codigo usas ese mismo array esperando que este en su orde original, y algo lo cambia sin que te des cuenta, puede causar errores dificiles de encontrar despues.
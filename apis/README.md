 APIs - Ejercicio 1



1. ¿Cuantas formas de fallar tiene la peticion? ¿Se detectan igual?
Varias, y no se detectan igual:
No hay internet entonces fetch falla y se atrapa con catch
La API responde 404 o 500: fetch no  falla y entonces manda un mensaje .
La respuesta no es un JSON valido entonces falla 


2. ¿Diferencia entre Promise.all y Promise.allSettled?
Si una peticion falla, Promise.all falla completo y el otro espera todas y dice cual salio bien y cual mal

3. ¿Por que no basta un `console.log` del error?
Porque solo lo muestra y el programa sigue como si nada. 
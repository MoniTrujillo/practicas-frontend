Ejercicio 2 - Hoisting y comparaciones

¿Qué devuelve por consola cada uno de los siguientes console.log? Justifica cada respuesta.

console.log(a);
var a = "hola";

Este ejercicio no devuelve un error, porque var esta abajo de el consol log,eso quiere decir que como tal no esta declarada o sea todavia no existe antes del consol, pero js lo que hace es que antes de ejecutar linea por linea lo recorre completo primero detecta el error y manda arriba var a lo que quiere decir que como tal cuando lo corra va a identificar que ahi va a haber un valor pero aun no se sabe cual que en este caso mandaria un undefined


console.log(b);
let b = "hola";

Esta en cambio con el ejercicio anterior si da error, ya var es mas libre y en js let es más limitada por asi decirlo, es decir la va a subir arriba, pero el js no le va a asignar el undefined como en el otro caso, en este te va a mandar el error para evitar que sigas cuando tienes ese pequeño detalle.



console.log(c);
const c = "hola";

Que va a pasar lo mismo que con ele ejercicio de arriba, o sea el js si la va a subir pero no le va a asignar el valor como a var , asi que va a mandar un error de que pues falta definirla


sayHi();
function sayHi() {
  console.log("Hola desde sayHi!");
}


JavaScript va a detectar la función completa  o sea todo lo que trae , no solo su nombre, así que la deja pasar sin importar si la llamas arriba o abajo en el código en ambos casos funciona igual y no manda ningún error.



function sayBye() {
  console.log("Adios desde sayBye!");
}

sayBye();

 pues que el console log no va a dar error porque funciona igual que el anterior



Parte 2: Comparaciones

// == vs ===
console.log(1 == "1");
console.log(1 === "1");

es que si pones == no va a marcar ningún error porque no es tan seguro o estricto  el == eso quiere decir que en js el 1 si va a ser igual a 1  y eso va a dar un true y en el otro que es  como mas certero  y estricto o sea que si pones lo mismo pero con === te va a mandar un false porque 1 de number no es igual a 1 de string

console.log(null == undefined);
console.log(null === undefined);
va a pasar lo mismo que lo de arriba en la primera el js los va a tratar como iguales y en el otro va a dar error porque va a detectar que no son lo mismo ambos son diferentes 



console.log(Boolean(""));   

false — está en la lista de los 7 valores falsy (texto vacío)

console.log(Boolean(0)); 
 false — 0 también está en la lista de los 7 valores falsy

console.log(Boolean([]));  

 true  — aunque parece vacío, es un objeto, y todo objeto es truthy, tenga o no contenido
console.log(Boolean({}));   

true  — mismo caso: es un objeto, sin importar si está vacío o lleno, siempre es truthy


// NaN
console.log(NaN == NaN);
va a dar false, porque nan se da cuando no hay un numero matematico y no puede ser igual ni siquiera a si mismo 

console.log(Number.isNaN(Number("hola")));

da true porque ahi se pregunta que si va a dar nan y pues si porque hola no es un numero 



Preguntas

¿Cuáles son todos los valores falsy de JavaScript?
null, false , 0, -0, 0n ndefined, NaN.


¿Por qué [] es truthy pero Boolean([]) == false da true?

o sea que se puede decir que los corchetes son truthy  pero en el truthy pero en el `Boolean([]) trae un valor o sea bueno no pero traiga o no traiga es un objeto y como tal se convierte en truthy entonces eso que va a devolver un true porque si trae algo entonces true==false pues te devuelve un false porque no son iguales`

¿Por qué se recomienda usar siempre === en lugar de ==?
porque es mas estricto y no se equivoca como el == ya que este podrias tener errores y los dejaria pasar 
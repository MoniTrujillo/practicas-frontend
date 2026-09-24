const user = { name: "Pedro", age: 45 };
const user2 = { name: "Lucía", age: 31 };
const findAnimal = (name) => `Buscando ${name}...`;
const color = "azul";



// 1. Crear el map
const myMap = new Map();

// 2. Añadir pares clave-valor
myMap.set("moroso", user);
myMap.set("agarrado", user);
myMap.set("generoso", user2);
myMap.set("funcion", findAnimal);
myMap.set("color", color);

// 3. Mostrar todo el map
console.log(myMap);

// 4. Valor de la clave 
console.log(myMap.get("moroso"));

// 5. ¿Existe la clave "hola"?
console.log(myMap.has("hola")); // false

// 6. Tamaño total
console.log(myMap.size); // 5

// 7. Recorrer con forEach
myMap.forEach((valor, clave) => {
  console.log(clave, valor);
});

// 8. Eliminar "agarrado"
myMap.delete("agarrado");
console.log(myMap);

// 9. Limpiar por completo
myMap.clear();
console.log(myMap); // Map(0) {}


// Prueba B: cambiar user.age
user.age = 50;
console.log(myMap.get("moroso")); 
console.log(myMap.get("agarrado")); 


// Prueba C: objeto como clave
myMap.set(user, "es el moroso");
console.log(myMap.get(user)); 
console.log(myMap.get({ name: "Pedro", age: 50 })); 





const numeros = [1, 2, 2, 3, 4, 4, 4, 5];
const etiquetas = ["vue", "nuxt", "vue", "css", "nuxt"];

// 1. Quitar duplicados de numeros, devolver array
const numerosUnicos = [...new Set(numeros)];
console.log(numerosUnicos); // [1, 2, 3, 4, 5]

// 2. Igual con etiquetas
const etiquetasUnicas = [...new Set(etiquetas)];
console.log(etiquetasUnicas); // ["vue", "nuxt", "css"]

// 3. Set vacío, añadir con add, uno repetido a propósito
const miSet = new Set();
miSet.add("a");
miSet.add("b");
miSet.add("a"); // repetido a propósito
console.log(miSet.size); // 2, el repetido no se añadió

// 4. has y delete
console.log(miSet.has("a")); // true
miSet.delete("a");
console.log(miSet.has("a")); // false

// 5. Recorrer con forEach
miSet.forEach(valor => {
  console.log(valor);
});

// 6. La trampa: objetos duplicados
const setObjetos = new Set([{ id: 1 }, { id: 1 }]);
console.log(setObjetos.size); 

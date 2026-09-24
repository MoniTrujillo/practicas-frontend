const products = [
  { id: 1, name: "Teclado", price: 45, stock: 10, category: "periféricos" },
  { id: 2, name: "Monitor", price: 220, stock: 0, category: "pantallas" },
  { id: 3, name: "Ratón", price: 25, stock: 3, category: "periféricos" },
  { id: 4, name: "Webcam", price: 60, stock: 7, category: "periféricos" },
  { id: 5, name: "Portátil", price: 950, stock: 2, category: "ordenadores" },
];

// 1. Un array sólo con los nombres de los productos.
const nombres = products.map(product => product.name);
console.log(nombres);
console.log(products);

// 2. Productos con stock
const conStock = products.filter(product => product.stock > 0);
console.log(conStock);
console.log(products);

// 3. El producto con id 4
const productoId4 = products.find(product => product.id === 4);
console.log(productoId4);
console.log(products);

// 4. Valor total del inventario
const valorTotal = products.reduce((acumulador, product) => {
  return acumulador + (product.price * product.stock);
}, 0);
console.log(valorTotal);
console.log(products);

// 5. ¿Hay algún producto de más de 500€?
const hayCaro = products.some(product => product.price > 500);
console.log(hayCaro);
console.log(products);

// 6. ¿Todos están por debajo de 1000€?
const todosBaratos = products.every(product => product.price < 1000);
console.log(todosBaratos);
console.log(products);

// 7. Ordenados de más barato a más caro, sin modificar el original
const ordenadosPorPrecio = [...products].sort((a, b) => a.price - b.price);
console.log(ordenadosPorPrecio);
console.log(products); // sigue intacto

// 8. Productos de "periféricos" con precio +10%
const perifericosConAumento = products
  .filter(product => product.category === "periféricos")
  .map(product => ({ ...product, price: product.price * 1.1 }));
console.log(perifericosConAumento);
console.log(products);
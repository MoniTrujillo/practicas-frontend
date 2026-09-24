const response = {
  user: {
    name: "Lucía",
    address: {
      city: "Vigo",
    },
  },
  settings: null,
  visits: 0,
};

// 1. Optional chaining
const street = response.user?.address?.street;
console.log(street); 

const companyName = response.company?.name;
console.log(companyName); 

// 2. Nullish coalescing con valor por defecto
const country = response.user?.address?.country ?? "España";
console.log(country); 

// 3. La trampa: escribe const visits = response.visits || "Sin visitas"; y luego const visits = response.visits ?? "Sin visitas";. Los dos dan resultados distintos. Explica por qué y cuál es el correcto.
const visitsOr = response.visits || "Sin visitas";
console.log(visitsOr); 

const visitsNullish = response.visits ?? "Sin visitas";
console.log(visitsNullish); 

// 4. Destructuring con valores por defecto
const { name, role = "invitado" } = response.user;
console.log(name, role); 

// 5. Spread: copia con un cambio, sin modificar el original
const userConOtraCiudad = {
  ...response.user,
  address: { ...response.user.address, city: "Madrid" },
};
console.log(userConOtraCiudad);
console.log(response.user); 

// 6. Rest: función que suma todos los argumentos
function sumar(...numeros) {
  return numeros.reduce((total, n) => total + n, 0);
}
console.log(sumar(1, 2, 3)); 
console.log(sumar(10, 20)); 
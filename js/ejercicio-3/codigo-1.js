// Código original
// var usuario = {
//   nombre: "Pedro",
//   apellido: "Sánchez",
//   edad: 45,
//   profesion: "Barro man",
// };
//
// function nombreUsuario(user) {
//   const nombrCompleto = "Me llamo " + user.nombre + " " + user.apellido;
//   return nombrCompleto;
// }

// Código refactorizado
const usuario = {
  nombre: "Pedro",
  apellido: "Sánchez",
  edad: 45,
  profesion: "Barro man",
};



function nombreUsuario(user) {
  return `Me llamo ${user.nombre} ${user.apellido}`;
}

// primero cambie var por const porque var no es segura y usuario no va a acambiar asi que es const
//luego en la funcion lo que  vi en la teoria es este $ que es mas facil concatenar y leible 
//a estar poniendo + y comillas y espacios y por ultimo quite la vconstante de nombre completa porque no es necesario crear una variable para eso y solo se va a retornar el string

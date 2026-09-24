// codigo original 
//const user = {
  //name: "Álvaro",
  //last: "Morón",
  //age: 30,
  //nationality: "Morocco",
//};

//function esExtrangero(user) {
  //if (user.nationality != "España") {
    //if (user.age == "30") {
      //return "Apto para la ayuda del gobierno";
    //} else {
      //return "No es apto para la ayuda del gobierno";
    //}
  //} else {
    //return "No es apto para la ayuda del gobierno";
  //}
//}

//console.log(esExtrangero(user));



// codigo refactorizado

const user = {
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Morocco",
};

function esExtranjero(user) {
  
  const tieneEdadCorrecta = user.age === 30;
  const noEsEspanol = user.nationality !== "España";

  
  if (tieneEdadCorrecta && noEsEspanol) {
    return "Apto para la ayuda del gobierno";
  }

  
  return "No es apto para la ayuda del gobierno";
}

console.log(esExtranjero(user));

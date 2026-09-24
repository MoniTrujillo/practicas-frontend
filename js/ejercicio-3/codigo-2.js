const user = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};

function userData(user) {
  const annualSalary = user.salary * 12;
  const fullName = `${user.name} ${user.last}`;

  return `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;
}

console.log(userData(user));



// A este codigo no le haria nada porque a lo que he leido y visto 
// todo esta bien usa const , la formula para calcular el año esta bien 
// es legible  y entendible, usa lo de concatenar con $
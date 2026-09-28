interface Animal {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
}

interface Dog extends Animal {
  race: string;
  age: number;
}

const bird: Animal = {
  name: "Pelusa",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: true,
};

const dog: Dog = {
  name: "Lady",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: "Coker Spaniel",
  age: 11,
};

console.log(bird);
console.log(dog);
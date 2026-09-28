type Race = "Husky" | "Labrador" | "Chucho";

interface Animal {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
}

interface Dog extends Animal {
  race: Race;
  age: number;
}

const bird: Animal = {
  name: "Piolín",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: true,
};

const dog: Dog = {
  name: "Firulais",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: "Labrador",
  age: 3,
};

console.log(bird);
console.log(dog);

export {};
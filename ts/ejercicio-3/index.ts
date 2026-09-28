interface Cat {
  name: string;
  color: string;
  canSleep: boolean;
}

interface Snake {
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
}

const cat: Cat = {
  name: "Michi",
  color: "Negro",
  canSleep: true,
};

const snake: Snake = {
  canEat: true,
  canDrink: true,
  canSleep: true,
};



console.log(cat);
console.log(snake);

export {};

interface Dog {
  name: string;
  race: string;
  age: number;
  canBark: boolean;
}

const dogs: Dog[] = [
  { name: "Lady", race: "Labrador", age: 3, canBark: true },
  { name: "Roque", race: "Pastor Alemán", age: 1, canBark: true },
];


function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstDog = getFirst(dogs); 
const firstName = getFirst(["a", "b"]); 


function getFirstAny(arr: any[]) {
  return arr[0];
}
const anyDog = getFirstAny(dogs);
anyDog.cualquierCosa; 


type DogPreview = Pick<Dog, "name" | "race">;
type DogWithoutAge = Omit<Dog, "age">;


type FrozenDog = Readonly<Dog>;
const frozen: FrozenDog = { name: "Luna", race: "Chihuahua", age: 16, canBark: true };

function updateDog(dog: Dog, changes: Partial<Dog>): Dog {
  return { ...dog, ...changes };
}

const original: Dog = { name: "Coqueta", race: "Coker spaniel", age: 4, canBark: true };
const older = updateDog(original, { age: 5 });



export {};
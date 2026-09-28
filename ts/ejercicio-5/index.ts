
interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { slot: number; type: { name: string; url: string } }[];
  sprites: { front_default: string | null }; 
}


function isPokemon(data: unknown): data is Pokemon {
  if (typeof data !== "object" || data === null) return false;

  const p = data as Record<string, unknown>;

  return (
    typeof p.id === "number" &&
    typeof p.name === "string" &&
    typeof p.height === "number" &&
    typeof p.weight === "number" &&
    Array.isArray(p.types) &&
    typeof p.sprites === "object" &&
    p.sprites !== null
  );
}


async function getPokemon(name: string): Promise<Pokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!response.ok) {
    throw new Error(`Error ${response.status}`);
  }

  const data: unknown = await response.json(); // unknown, no any

  if (!isPokemon(data)) {
    throw new Error("La respuesta no tiene el formato esperado");
  }

  return data; 
}

getPokemon("ditto").then((pokemon) => {
  console.log(pokemon.name, pokemon.height, pokemon.sprites.front_default);
});

getPokemon("pikachu").then((pokemon) => {
  console.log(pokemon.name);
});

export {};
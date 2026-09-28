
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
    throw new Error(`Error ${response.status}: no se pudo obtener "${name}"`);
  }

  const data: unknown = await response.json();

  if (!isPokemon(data)) {
    throw new Error(`Los datos de "${name}" no tienen el formato esperado`);
  }

  return data;
}

async function main() {
  
  for (const name of ["ditto", "no-existe"]) {
    try {
      const pokemon = await getPokemon(name);
      console.log(pokemon.name, pokemon.height, pokemon.weight);
    } catch (error) {
      console.error(error instanceof Error ? error.message : error);
    }
  }


  const names = ["ditto", "pikachu", "no-existe"];
  const results = await Promise.allSettled(names.map((n) => getPokemon(n)));

  results.forEach((result, i) => {
    if (result.status === "fulfilled") {
      console.log(`Bien: ${names[i]} (id ${result.value.id})`);
    } else {
      console.log(`Mal: ${names[i]} -> ${result.reason.message}`);
    }
  });
}

main();

export {};
import { useEffect, useState } from "react";
import { getAllPokemon } from "../api/pokemon.api";
import { PokeCard } from "./PokeCard";

export function PokemonList() {
  const [Pokemon, setPokemon] = useState([]);
  useEffect(() => {
    async function loadPokemon() {
      const res = await getAllPokemon();
      setPokemon(res.data);
    }
    loadPokemon();
  }, []);
  return (
    <div className="grid">
      <h1 className="font-bold text-2xl">Pokemon List</h1>
      <ul>
        {Pokemon.map((pokemon) => (
          <PokeCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
}

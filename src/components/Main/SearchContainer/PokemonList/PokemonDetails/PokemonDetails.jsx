import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchPokemonByName } from "../services/pokemonService";

function PokemonDetails() {
  const [searchParams] = useSearchParams();
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      // http://localhost:5173/pokemon-details?name=snorlax
      const name = searchParams.get("name");
      if (!name) {
        setError("No Pokemon name provided.");
        setPokemon(null); // Limpiar el estado del Pokémon si no hay nombre
        return;
      }

      try {
        const data = await fetchPokemonByName(name);
        setPokemon(data);
        setError(null); // Limpiar errores si la búsqueda es exitosa
      } catch (err) {
        setError(err.message);
        setPokemon(null); // Limpiar el estado del Pokémon si ocurre un error
      }
    };

    fetchPokemon();
  }, [searchParams]);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </div>
  );
}

export default PokemonDetails;

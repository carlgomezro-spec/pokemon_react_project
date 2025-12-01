import React from "react";
import PokemonCard from "./PokemonCard/PokemonCard";
//<PokemonList />: recibe pokemons como prop y renderiza la lista de Pokémon obtenidos.
const PokemonList = ( {pokemons} ) => { //Array de pokemons pasado por props por el cCntenedo Padre
  //función renderizado -> se la pasamos a PokemonCard -> para cada pokemon (id / datos pokemon)
  const renderCard = () => pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)

  return (
    <section>
       {renderCard()}
    </section>
  );
};

export default PokemonList;
import React from "react";

const PokemonCard = ({pokemon}) => { //prop pokemon del contenedor Padre PokemonList
  const id = pokemon.id;
  const name = pokemon.name;
  const image= pokemon.sprites?.front_default || pokemon.image;
  const typeOne= pokemon.types?.[0]?.type.name || pokemon.typeOne;
  const typeTwo= pokemon.types?.[1]?.type.name ||  pokemon.typeTwo;

  return <article className="pokemonCard">
    <h2 className="pokemonName">{name}</h2>
    <p><b>ID:</b>{id}</p>
    <img src={image}></img>
    <p><b>Tipo Uno:</b>{typeOne}</p>
    <p><b>Tipo Dos:</b>{typeTwo}</p>
  </article>;
};

export default PokemonCard;
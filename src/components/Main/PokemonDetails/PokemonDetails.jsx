import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchPokemonById } from "../../services/pokemonService";


//RUTAS
//https://pokeapi.co/api/v2/pokemon/3
//https://pokeapi.co/api/v2/pokemon/5

const PokemonDetails = () => {
  const { id } = useParams(); // params
  

  //ESTADOS
  const [pokemonDetails, setPokemonDetails] = useState(null);



    useEffect(() => {
    const fetchPokemon = async () => {
   
      try {
        const data = await fetchPokemonById(id);
        setPokemonDetails(data);
      
      } catch (error) {
       console.error("Error fetching product data:", error);
      }
    };

    fetchPokemon();
  }, [id]);

  //Para poder escuchar sus sonidos
  const playCryLatest = () => {
  if (pokemonDetails?.cries?.latest) {
    const audio = new Audio(pokemonDetails.cries.latest);
    audio.play().catch(err => console.log("Audio no reproducido", err));
    }
  };
    

  

  //FUNCIÓN DE RENDERIZADO
  const renderOnePokemon = () => {
    if (!pokemonDetails) return "No se ha encontrado este pokemon";
    return (
      <div className="pokemonDetail">
        
        {/* <h1>POKEMON DETAIL</h1> */}
        
        <h2 className="pokemonName"> {pokemonDetails.name}</h2>
        <img src={pokemonDetails.sprites.front_default}></img>
        <p><b>ID:</b> {pokemonDetails.id}</p>
        <p><b>Abilities:</b> {pokemonDetails.abilities[0].ability.name} / {pokemonDetails.abilities[1].ability.name}</p>
        <p><b>Base Experience:</b> {pokemonDetails.base_experience }</p>
        <p className="type"><b>TypeOne: </b>{pokemonDetails.types[0].type.name}</p>
        <p className="type"><b>TypeTwo: </b> {pokemonDetails.types[1]?.type.name}</p>
        <p><b>Height:</b>{pokemonDetails.height}</p>
        <p><b>Moves: </b>{pokemonDetails.moves[0]?.move.name}</p>
        <button onClick={playCryLatest}>Escuchar Cry</button>
        
       
      </div>
    )
  }
  return <div>
    {id ? renderOnePokemon() : ""}
    </div>;
};

export default PokemonDetails;
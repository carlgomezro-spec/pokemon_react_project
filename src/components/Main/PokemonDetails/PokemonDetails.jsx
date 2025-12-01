import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchPokemonById } from "../../services/pokemonService";


//RUTAS
//https://pokeapi.co/api/v2/pokemon/3
//https://pokeapi.co/api/v2/pokemon/5

const PokemonDetail = () => {
  const { id } = useParams(); // params
  

  //ESTADOS
  const [pokemonDetail, setPokemonDetail] = useState(null);



    useEffect(() => {
    const fetchPokemon = async () => {
   
      try {
        const data = await fetchPokemonById(id);
        setPokemonDetail(data);
      
      } catch (error) {
       console.error("Error fetching product data:", error);
      }
    };

    fetchPokemon();
  }, [id]);

  //Para poder escuchar sus sonidos
  const playCryLatest = () => {
  if (pokemonDetail?.cries?.latest) {
    const audio = new Audio(pokemonDetail.cries.latest);
    audio.play().catch(err => console.log("Audio no reproducido", err));
    }
  };
    

  

  //FUNCIÓN DE RENDERIZADO
  const renderOnePokemon = () => {
    if (!pokemonDetail) return "No se ha encontrado este pokemon";
    return (
      <div className="pokemonDetail">
        
        {/* <h1>POKEMON DETAIL</h1> */}
        
        <h2 className="pokemonName"> {pokemonDetail.name}</h2>
        <img src={pokemonDetail.sprites.front_default}></img>
        <p><b>ID:</b> {pokemonDetail.id}</p>
        <p><b>Abilities:</b> {pokemonDetail.abilities[0].ability.name} / {pokemonDetail.abilities[1].ability.name}</p>
        <p><b>Base Experience:</b> {pokemonDetail.base_experience }</p>
        <p className="type"><b>TypeOne: </b>{pokemonDetail.types[0].type.name}</p>
        <p className="type"><b>TypeTwo: </b> {pokemonDetail.types[1]?.type.name}</p>
        <p><b>Height:</b>{pokemonDetail.height}</p>
        <p><b>Moves: </b>{pokemonDetail.moves[0]?.move.name}</p>
        <button onClick={playCryLatest}>Escuchar Cry</button>
        
       
      </div>
    )
  }
  return <div>
    {id ? renderOnePokemon() : ""}
    </div>;
};

export default PokemonDetail;
import React, { useState, useEffect, useContext} from "react";
import axios from "axios";

import { PokemonContext } from "../../../components/context/PokemonContext.js";//CONTEXTO

import PokemonList from "./PokemonList/PokemonList" //Importamos Componente: PokemonList(renderizado)
import Search from "./Search/Search" //Importamos Componente: Search: input + botón


const SearchContainer = () => {
  //Estados siempre arriba
  const [value, setValue] = useState(""); //Almacena el texto que escribe el usuario en el INPUT
  const [pokemons, setPokemons] = useState([]); //array de POKEMONS mostrados API/listalocal
  
  //Contexto
  const { pokemonList } = useContext(PokemonContext);

  //Llamamos a la api
  useEffect(() => {
    if (!value.trim()) return; // No hacer la petición si no hay valor input

    const existsInLocal = pokemonList.some( 
      (pokemon) => pokemon.name.toLowerCase().includes(value.toLowerCase())
    ); // comprueba si alguno de los pokemons de nuestra pokemonList local sea === al buscado en el input

    if(existsInLocal){//Mostramos los que coinciden con local
       const localFiltered = pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(value.toLowerCase())
      );
      setPokemons(localFiltered);// Actualiza el estado de pokemons
      return;
    }
    //Lamamos a la API
    async function fetchData() {
      
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`//introducimos el valor que se buscrá en el INPUT
        );
        const apiResult = [res.data];//estado del array de pokemons con los datos de la API
        setPokemons([ ...apiResult]); //actualizamos el estado de pokemons con el array de 
      } catch (e) {
        setPokemons([]);
        console.log("Pokemon no encontrado") // No mostrar nada si hay error
      }
    }
    fetchData();//ejecutar función fetchData
  }, [value, pokemonList]);//solo ejecuta el efecto cuando value cambie
    
  return <section>
      <Search setValue={setValue}/> 
      <PokemonList  pokemons={pokemons} />
    </section>
};

export default SearchContainer;
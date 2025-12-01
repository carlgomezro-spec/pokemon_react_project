import React, { useState, useEffect, useContext} from "react";
import axios from "axios";

//CONSUMIDOR: Va a leer los datos de APP.JSX DE POKEMONLIST (pokemons creados y actualizados en el formulario)
import { PokemonContext } from "../../../components/context/PokemonContext.js";//CONTEXTO

import PokemonList from "./PokemonList/PokemonList" //Importamos Componente: PokemonList(renderizado)
import Search from "./Search/Search" //Importamos Componente: Search: input + botón

//CONTENEDOR PADRE: 
//- Mantiene el estado (texto del input y lista de pokemons)
//- Pasa props a Search (input + botón) y a PokemonList (lista para renderizar).

const SearchContainer = () => {
  //ESTADOS
  const [value, setValue] = useState(""); //Almacena el texto que escribe el usuario en el INPUT
  const [pokemons, setPokemons] = useState([]); //array de POKEMONS mostrados API/listalocal
  
  //CONTEXTO
  const { pokemonList } = useContext(PokemonContext);

  //LLAMADA A LA API y LISTA LOCAL
  //UseEffect:un hook que sirve para ejecutar código “secundario” o “efectos"----------
  useEffect(() => {
    if (!value.trim()) return; // No hacer la petición si no hay valor input

    //POKEMONLIST PROVEEDOR -> APP.JSX
    //Comprobar si exite en la lista LOCAL el pokemon
    const existsInLocal = pokemonList.some( //.some()->comprobar si alguno de los pokemons de nuestra pokemonList local sea === al buscado en el input
      (pokemon) => pokemon.name.toLowerCase().includes(value.toLowerCase())
    );
    if(existsInLocal){//Mostramos los que coinciden con local
       const localFiltered = pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(value.toLowerCase())
      );
      setPokemons(localFiltered);// Actualiza el estado pokemons, que es el array que tú mandas al componente <PokemonList />.
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
  }, [value, pokemonList]);//[value /pokemonList]-> solo ejecutar el efecto cuando value cambie
    

 //RETURN
 //Pasamos props a los Componentes Hijos(Search/PokemonList)
 //Search -->le pasamos el estado del valor {setValue}
 //PokemonList -->le pasamos el array de pokemons
  return <section>
      <Search setValue={setValue}/> 
      <PokemonList  pokemons={pokemons} />
    </section>
};

export default SearchContainer;
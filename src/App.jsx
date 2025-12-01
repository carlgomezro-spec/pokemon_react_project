import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { PokemonContext } from './components/context/PokemonContext.js' //PROVEEDOR DE CONTEXTO

import './App.css'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'
function App() {

  //Proveer este ESTADO a los compomentes consumidores ->  LISTA POKEMONS
  //Añadimos a traves de PokemonForm (CONSUMIDOR)
  // Vamos a intrudcirlo lógica de búsqueda de SearchContainer (CONSUMIDOR)
  const [pokemonList, setPokemonList] = useState([]);

  // Cargar desde LocalStorage al iniciar
  useEffect(() => {
    const storedPokemons = localStorage.getItem("myPokemonList");
    if (storedPokemons) {
      setPokemonList(JSON.parse(storedPokemons));
    }
  }, []);
  //ACTUALIZAR LISTA POKEMONS-> newPokemon del PokemonForm + LocalStorage
  // const updatePokemon  = (newPokemon) => { 
  //   setPokemonList([...pokemonList, newPokemon]);
  // };

   const updatePokemon  = (newPokemon) => { 
    const updatedList = [...pokemonList, newPokemon];
    setPokemonList([updatedList]);
    localStorage.setItem("myPokemonList", JSON.stringify(updatedList)); // Guardar en LocalStorag
  };

  //DATOS para alimentar al contexto que se va a PROVEER-> lista de pokemons + lista pokemons actualizada
  const pokemonData = {pokemonList, updatePokemon}
  return (
    <>
     <PokemonContext.Provider value={pokemonData}>
        <BrowserRouter>
            <Header/>
            <Main/>
        </BrowserRouter>
     </PokemonContext.Provider> 
      <Footer/>
    </>
  )
}

export default App
import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { PokemonContext } from './components/context/PokemonContext.js' //PROVEEDOR DE CONTEXTO

import './App.css'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'
function App() {

  const [pokemonList, setPokemonList] = useState([]);

  // Cargar desde LocalStorage al iniciar
  useEffect(() => {
    const storedPokemons = localStorage.getItem("myPokemonList");
    if (storedPokemons) {
      setPokemonList(JSON.parse(storedPokemons));
    }
  }, []);

   const updatePokemon  = (newPokemon) => { 
    const updatedList = [...pokemonList, newPokemon];
    setPokemonList([updatedList]);
    localStorage.setItem("myPokemonList", JSON.stringify(updatedList)); // Guardar en LocalStorage
  };

  //Datos para alimentar al contexto. Lista de pokemons + lista pokemons actualizada
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
import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom'

import PokemonForm from './PokemonForm/PokemonForm'
import SearchContainer from './SearchContainer/SearchContainer'
import PokemonDetail from './PokemonDetails/PokemonDetails'

const Main = () => {
  return <main>
    <h1 className="title">Encuentra tu Pokemon Favorito</h1>
    <Routes>
      <Route path='/'element={<SearchContainer/>}/>
      <Route path='/new'element={<PokemonForm/>}/>
      <Route path='/pokemon/:id'element={<PokemonDetail/>}/>
    </Routes>
  </main>;
};

export default Main;
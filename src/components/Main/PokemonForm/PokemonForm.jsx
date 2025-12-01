
import React ,{ useContext, useState} from 'react'
import { PokemonContext } from '../../../components/context/PokemonContext' //CONTEXTO

//TIPOS DE POKEMONS (para el select del formulario)
const pokemonTypes = ["normal", "fire", "water", "grass", "electric", "ice"];

//CONSUMIDOR: consumirá de APP.JSX->UPDATEPOKEMON para poder añadir un nuevo pokemon al sistema.
const PokemonForm = () => {
    //Consumir el CONTEXTO
    const { updatePokemon } = useContext(PokemonContext);
    
    //ESTADO FORMULARIO
    const [newPokemon, setNewPokemon] = useState({ 
              id: "",
              name: "",
              image: "",
              typeOne:"",
              typeTwo:"",
            });
      
      //Se ejecuta cada vez que el usuario escribe/cambia un INPUT/SELECT -> en FORM
      const handleChange = (e) => {
              setNewPokemon({
              ...newPokemon, //copia todo el objeto con todos sus campos (id/name/image...)
              [e.target.name]: e.target.value, //e.target.name = name------>e.target.value = "Lucia" // e.target.name = TypeOne------>e.target.value = "electric"
              });
      };

      //Función que se ejecuta al ENVIAR el FORM
      const handleSubmit = (e) => {
          e.preventDefault();
          updatePokemon (newPokemon);  //añade el nuevo pokemon a POKEMONLIST DE APP.JSX
          setNewPokemon({ //limpiar formulario
            id: "",
            name: "",
            image: "",
            typeOne: "",
            typeTwo: ""
          });
      };

      
    return <div>
      <h1>Create your Pokémon:</h1>
      <form className="addPokemon" onSubmit={handleSubmit}>
          <label>ID:</label>
          <input type="number" name="id" value={newPokemon.id} onChange={handleChange} required /> 
      
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newPokemon.name}
            onChange={handleChange}
            minLength="3"
            required
          />
          
          <label>Photo (URL):</label>
          <input type="text" name="image" value={newPokemon.image} onChange={handleChange} required />
      
          <label>Type 1:</label>
          <select name="typeOne" value={newPokemon.typeOne} onChange={handleChange} required>
            <option value="">Select type</option>
            {pokemonTypes.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          <label>Type 2:</label>
          <select name="typeTwo" value={newPokemon.typeTwo} onChange={handleChange}>
            <option value="">Select type</option>
            {pokemonTypes.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        
        <button type="submit">ADD</button>
      </form>
      </div>
};
  


export default PokemonForm;
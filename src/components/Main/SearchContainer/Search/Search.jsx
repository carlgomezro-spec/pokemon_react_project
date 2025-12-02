import React,{useState ,useEffect, useRef} from "react";

const Search = ({setValue}) => { //prop del Componente Padre (valor del input)

  const [input, setInput] = useState("");//Estado del input (en principio está vacío)
  //Debounce
  const debounceRef = useRef(null);
   useEffect(() => {
    // si el input está vacío → NO lanzamos nada
    if (input.trim() === "") return;

    // limpiamos el temporizador previo
    if (debounceRef.current) clearTimeout(debounceRef.current);

    // nuevo temporizador (debounce)
    debounceRef.current = setTimeout(() => {
      setValue(input);       // actualizamos value en SearchContainer
    }, 1500); // 1.5s debounce

    return () => clearTimeout(debounceRef.current);
  }, [input, setValue]);

  return<section>
           <form >
              <input className="searchInput"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Busca un Pokémon"
            />
          </form>
  
       </section>;
};

export default Search;
import React,{useState ,useEffect, useRef} from "react";

//<Search />: recibe setValue como prop, para actualizar el estado value cuando el usuario escribe y envía.

const Search = ({setValue}) => { //prop del Componente Padre (valor del input)
  //ESTADO
  const [input, setInput] = useState("");//Estado del input (en principio está vacío)
  //DEBOUNCE
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
  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (input.trim() !== "") {
  //       setValue(input); // Actualizamos el estado en SearchContainer
  //       setInput("");
  //     }
  //   };

  //onSubmit={handleSubmit}
  return<section>
           <form >
              <input className="searchInput"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Busca un Pokémon"
            />
            {/* <button type="submit">Buscar</button> */}
          </form>
  
       </section>;
};

export default Search;
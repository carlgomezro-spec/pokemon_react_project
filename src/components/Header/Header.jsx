import React, { useContext} from "react";
import Nav from "./Nav";

import { UserContext } from '../../context/UserContext'

const Header = () => {
  //consumir el contexto
  const { username, updateUsername} = useContext(UserContext);

  return <header>
    <Nav/>
    {username ? 
        <>
          <span>Hola, {username}</span>
          <button onClick={() => updateUsername("")}>Logout</button>
        </>
       : <button>Login</button>
      }
    </header>; 
};

export default Header;

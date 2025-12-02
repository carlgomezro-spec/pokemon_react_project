import React from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
  return <nav>
        <ul>
          
          <li><Link to="/">Buscar</Link></li>
          <li><Link to="/new">Añadir</Link></li>
          {/* <li><Link to="/pokemon/">Detalle</Link></li> */}
        </ul>
    </nav>;
};

export default Nav;
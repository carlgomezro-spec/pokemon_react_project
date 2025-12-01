import React from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
  return <nav>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/christmaslist'>List</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/product'>Product</Link></li>
      <li><Link to='/staff'>Staff</Link></li>
      <li><Link to='/topic'>Topic</Link></li>
      <li><Link to='/wishlist'>Whishes</Link></li>
    </ul>
  </nav>;
};

export default Nav;

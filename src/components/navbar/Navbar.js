import React from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar(props) {

  return (
    <div className="Navbar">
      <h3>Navbar</h3>
      <ul>
        <li><NavLink to="/main">Main Page</NavLink></li>
        <li><NavLink to="/recipes">Recipes</NavLink></li>
      </ul>
      <hr />
    </div>
  );

}

export default Navbar;
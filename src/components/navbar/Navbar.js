import React from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar(props) {

  const doTheLogout = () => {
    props.pleaseLogOut()
      .then(() => {
        props.getUser();
      })

  }

  return (
    <div className="Navbar">
      <h3>Navbar</h3>
      <ul>
        <li><NavLink to="/main">Main Page</NavLink></li>
        <li><NavLink to="/recipes">Recipes</NavLink></li>

        {!props.theUser &&
          <span>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/signup">Signup</NavLink></li>
          </span>
        }
      </ul>
      {props.theUser &&
        <span>
          <button onClick={doTheLogout} >Log Out </button>
          <span>Hello, {props.theUser.username}</span>
        </span>
      }


      <hr />
    </div>
  );

}

export default Navbar;
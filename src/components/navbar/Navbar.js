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
      <div>
        <span>
          <NavLink to="/">Home</NavLink>
          {props.theUser &&
            <NavLink to="/cart">Cart</NavLink>
          }
        </span>
      </div>

      <div>
        {!props.theUser &&
          <span>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </span>
        }

        {props.theUser &&
          <span>
            <span>{props.theUser.username}</span>
            <button onClick={doTheLogout} >Log Out </button>
          </span>
        }
      </div>
    </div>
  );

}

export default Navbar;
import React from 'react';
import './navbar.css'
import { NavLink, Redirect } from 'react-router-dom'

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
            <button onClick={() => props.toggleForm('login')} > Login </button>
            <button onClick={() => props.toggleForm('signup')}>Sign Up</button>
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
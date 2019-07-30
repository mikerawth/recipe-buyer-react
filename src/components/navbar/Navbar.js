import React from 'react';
import './navbar.css'

function Navbar(props) {

  return (
    <div className="Navbar">
      <h3>This is the Navbar</h3>
      {props.message}
      <hr />
    </div>
  );

}

export default Navbar;
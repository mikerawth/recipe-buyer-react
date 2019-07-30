import React from 'react';
import './main.css'

function Main(props) {

  return (
    <div className="Main">
      <h3>This is the Main page</h3>
      {props.message}
      <hr />
    </div>
  );

}

export default Main;
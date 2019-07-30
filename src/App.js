import React from 'react';
import './App.css'

import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'test message for state'
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar message={this.state.message} />
        <Main message={this.state.message} />
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Main from '../components/Main/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Main/>
      </div>
    );
  }
}

export default App;

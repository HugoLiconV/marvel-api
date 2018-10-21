import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero'
import Comics from "../components/Comics/Comics";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Hero/>
        <Comics/>

      </div>
    );
  }
}

export default App;

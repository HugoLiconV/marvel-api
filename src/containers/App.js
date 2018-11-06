import React, {Component} from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import {Switch, Route} from 'react-router-dom'
import Main from '../components/Main/Main'
import ComicDetails from '../components/ComicDetails/ComicDetails';
import CharacterDetails from '../components/CharacterDetails/CharacterDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/comics/:id" component={ComicDetails}/>
          <Route path="/characters/:id" component={CharacterDetails}/>
          <Route path="/" component={Main}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;

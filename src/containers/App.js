import React, {Component} from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import {Switch, Route} from 'react-router-dom'
import Main from '../components/Main/Main'
import ComicDetails from '../components/ComicDetails/ComicDetails';
import CharacterDetails from '../components/CharacterDetails/CharacterDetails';
import { BrowserRouter } from 'react-router-dom';
import SearchResults from "../components/SearchResults/SearchResults";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path="/comics/:id/characters" component={SearchResults}/>
            <Route path="/characters/:id/comics" component={SearchResults}/>
            <Route path="/comics/:id" component={ComicDetails}/>
            <Route path="/characters/:id" component={CharacterDetails}/>
            <Route path="/" component={Main}/>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

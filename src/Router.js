import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Main from './components/Main/Main';
import CharacterDetails from './components/CharacterDetails/CharacterDetails'
import ComicDetails from "./components/ComicDetails/ComicDetails";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Main}/>
    <Route path="/comics/:id" component={ComicDetails}/>
    <Route path="/characters/:id" component={CharacterDetails}/>
    <Route path="/comics/" component={Main}/>
    <Route path="/characters/" component={Main}/>
  </Switch>
)

export default Router;
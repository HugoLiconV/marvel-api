import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Main from './components/Main/Main';
import CharacterDetails from './components/CharacterDetails/CharacterDetails'
import ComicDetails from "./components/ComicDetails/ComicDetails";

const Router = (props) => (
  <Switch>
    <Route exact path="/" render={() => (<Main {...props}/>)}/>
    <Route exact path="/(comics|characters)" render={() => (<Main {...props}/>)} />
    <Route path="/comics/:id" component={ComicDetails} something="foo"/>
    <Route path="/characters/:id" component={CharacterDetails}/>
  </Switch>
)

export default Router;
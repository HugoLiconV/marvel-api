import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Hero from '../Hero/Hero'
import Comics from "../Comics/Comics";
import ComicDetails from "../ComicDetails/ComicDetails";
import Characters from '../Characters/Characters'
import CharacterDetails from '../CharacterDetails/CharacterDetails'


const Main = () => {
  return (
    <main>
      <Hero/>
      <Switch>
        <Route exact path="/" component={Comics}/>
        <Route exact path="/comics" component={Comics}/>
        <Route path="/characters" component={Characters}/>
        <Route path="/character/:id" component={CharacterDetails}/>
        <Route path="/comic/:id" component={ComicDetails}/>
      </Switch>
    </main>
  );
}

export default Main;
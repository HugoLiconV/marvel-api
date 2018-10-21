import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Hero from '../Hero/Hero'
import Comics from "../Comics/Comics";
import Characters from '../Characters/Characters'
const Main = () => {
  return (
    <main>
      <h1>Main!</h1>
      <Hero/>
      <Switch>
        <Route exact path="/" component={Comics}/>
        <Route exact path="/comics" component={Comics}/>
        <Route path="/characters" component={Characters}/>
      </Switch>
    </main>
  );
}

export default Main;
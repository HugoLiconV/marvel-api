import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Hero from '../Hero/Hero'
import Comics from "../Comics/Comics";
import Characters from '../Characters/Characters'
import './Main.css'
import NotFound from "../NotFound/NotFound";

const Main = () => (
  <main>
    <Hero/>
    <Switch>
      <Route exact path="/" component={Comics}/>
      <Route path="/comics" component={Comics}/>
      <Route path="/characters" component={Characters}/>
      <Route component={NotFound}/>
    </Switch>
  </main>
);


export default Main;
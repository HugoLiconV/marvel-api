import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Hero from '../Hero/Hero'
import Comics from "../Comics/Comics";
import Characters from '../Characters/Characters'

const Main = (props) => {
  return (
    <main>
       <Hero/>
        <Switch>
          <Route exact path="/" render={(_props)=> <Comics {..._props} comics={props.comics}/>}/>
          <Route path="/comics" render={(_props)=> <Comics {..._props} comics={props.comics}/>}/>
          <Route path="/characters" component={Characters}/>
        </Switch>
    </main>
  );
}

export default Main;
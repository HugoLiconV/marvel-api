import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Pagination from '../Pagination/Pagination'
import Hero from '../Hero/Hero'
import Comics from "../Comics/Comics";
import Characters from '../Characters/Characters'
import './Main.css'

const Main = (props) => {
  // TODO: PRops por defecto
    
  return (
    <main>
       <Hero/>
       {/* <Comics {...props}/> */}
        <Switch>
          <Route exact path="/" render={(_props)=> <Comics {..._props} comics={props.comics}/>}/>
          <Route path="/comics" render={(_props)=> <Comics {..._props} comics={props.comics}/>}/>
          <Route path="/characters" component={Characters}/>
        </Switch>
    </main>
  );
}

export default Main;
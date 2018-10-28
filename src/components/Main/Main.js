import React from 'react';
import { Switch, Route } from 'react-router-dom'
import CharacterDetails from '../CharacterDetails/CharacterDetails'
import ComicDetails from "../ComicDetails/ComicDetails";
import Hero from '../Hero/Hero'
import Comics from "../Comics/Comics";
import Characters from '../Characters/Characters'

const Main = (props) => {
  return (
    <main>
       <Hero/>
        <Switch>
          <Route exact path="/" component={Comics}/>
          <Route path="/comics" render={()=> <Comics {...props}/>}/>
          <Route path="/characters" component={Characters}/>
        </Switch>
    </main>
  );
}

export default Main;
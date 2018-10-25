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
      <h1>{props.foo}</h1>
      {/* <Hero/> */}
        <Switch>
          <Route exact path="/" component={Comics}/>
          <Route path="/comics" component={Comics} foo="bar"/>
          <Route path="/characters" component={Characters} foo="bar"/>
          <Route path="/comics/:id" component={ComicDetails}/>
          <Route path="/characters/:id" component={CharacterDetails} foo="bar"/>
        </Switch>
    </main>
  );
}

export default Main;
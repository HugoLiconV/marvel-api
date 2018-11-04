import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom'
import axios from 'axios';
import Main from '../components/Main/Main'
import ComicDetails from '../components/ComicDetails/ComicDetails';
import CharacterDetails from '../components/CharacterDetails/CharacterDetails';
class App extends Component {
  
  state = {
    comics: []
  }

  componentDidMount() {
    axios.get('/comics')
    .then(res => {
      if (res.data.code === 200){
        const comics = res.data.data.results;
        this.setState({comics})
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
         <Switch>
            <Route path="/comics/:id" component={ComicDetails} />
            <Route path="/characters/:id" component={CharacterDetails} />
            <Route path="/" render={(props)=> <Main {...props} comics={this.state.comics}/>} />
         </Switch>
      </div>
    );
  }
}

export default App;

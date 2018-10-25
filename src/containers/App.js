import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Router from '../Router';
import axios from 'axios';
import md5 from 'blueimp-md5'
import Main from '../components/Main/Main'
class App extends Component {
  
  state = {
    comics: []
  }

  componentDidMount() {
    const PRIV_KEY = process.env.REACT_APP_PRIVATE_KEY;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
    const ts = new Date().getTime();
    const hash = md5(ts + PRIV_KEY + PUBLIC_KEY).toString();
    axios.get(`http://gateway.marvel.com/v1/public/comics`,{
      params: {
        ts: ts,
        apikey: PUBLIC_KEY,
        hash,
    }})
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
        {/* <Router comics={this.state.comics}/> */}
        <Main comics={this.state.comics}/>
      </div>
    );
  }
}

export default App;

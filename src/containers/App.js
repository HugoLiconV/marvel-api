import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar/Navbar';
import {Switch, Route} from 'react-router-dom'
import Main from '../components/Main/Main'
import ComicDetails from '../components/ComicDetails/ComicDetails';
import CharacterDetails from '../components/CharacterDetails/CharacterDetails';
import {BrowserRouter} from 'react-router-dom';
import SearchResults from "../components/SearchResults/SearchResults";
import PropTypes from "prop-types";
import LoadingSpinner from "../components/LoadingSpin/LoadingSpin";
import Footer from "../components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App wrapper">
          {this.props.comicsFetching || this.props.charactersFetching
            ? <LoadingSpinner/> : null}
          <div className="header">
            <Navbar/>
          </div>
          <div className="body">
            <Switch>
              <Route path="/comics/:id/characters" component={SearchResults}/>
              <Route path="/characters/:id/comics" component={SearchResults}/>
              <Route path="/comics/:id" component={ComicDetails}/>
              <Route path="/characters/:id" component={CharacterDetails}/>
              <Route path="/" component={Main}/>} />
            </Switch>
          </div>
          <div className="footer">
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  comicsFetching: PropTypes.bool.isRequired,
  charactersFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  comicsFetching: state.comics.fetching,
  charactersFetching: state.characters.fetching,
})

export default connect(mapStateToProps, {})(App);

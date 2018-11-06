import React from 'react';
import Character from './Character/Character'
import axios from 'axios';
import './Characters.css'
import Pagination from "../Pagination/Pagination";

class Characters extends React.Component {
  state = {
    characters: [],
    totalCharacters: 0,
    limit: 0
  }

  renderCharacter = character => {
    return (
      <Character key={character.id} character={character} history={this.props.history}/>
    )
  }

  getCharacters = (callback, params = {}) => {
    axios.get('/characters', {
      params: {
        ...params
      }
    })
      .then(callback)
      .catch(error => console.log(error))
  }

  onPageChanged = data => {
    const offset = (data.currentPage - 1) * data.pageLimit
    const handleRequest = res => {
      const data = res.data;
      if (data.code === 200) {
        const characters = data.data.results
        this.setState({ characters })
      }
    };
    this.getCharacters(handleRequest, { offset })
  }

  componentDidMount() {
    const handleResponse = res => {
      const data = res.data;
      if (data.code === 200) {
        const characters = data.data.results
        const totalCharacters = data.data.total
        const limit = data.data.limit
        this.setState({
          characters,
          totalCharacters,
          limit
        })
      }
    }
    this.getCharacters(handleResponse)
  }

  render() {
    if (this.state.totalCharacters === 0) return null;

    return (
      <div className="Characters">
        <h1>Characters</h1>
        <div className="u-flex-container-pagination">
          <Pagination
            totalRecords={this.state.totalCharacters}
            pageLimit={this.state.limit}
            pageNeighbours={1}
            onPageChanged={this.onPageChanged}
          />
        </div>
        <div className="grid-container">
          {this.state.characters.map(this.renderCharacter)}
        </div>
      </div>
    )
  }
}

export default Characters;
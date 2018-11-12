import React from 'react';
import Character from './Character/Character'
import './Characters.css'
import Pagination from "../Pagination/Pagination";
import {connect} from 'react-redux';
import {fetchCharacters} from "../../actions/characterActions";
import PropTypes from 'prop-types';

class Characters extends React.Component {

  componentDidMount() {
    this.props.fetchCharacters({ offset: 0 })
  }

  renderCharacter = character => {
    return (
      <Character key={character.id} character={character} history={this.props.history}/>
    )
  }

  getCharacters = async (params = {}) => {
    this.props.fetchCharacters({
      ...this.props.params,
      ...params,
    })
  }

  onPageChanged = data => {
    const offset = (data.currentPage - 1) * data.pageLimit
    this.getCharacters({offset})
  }

  render() {
    const {totalCharacters, characters, limit} = this.props

    if (parseInt(totalCharacters) === 0) return null;

    return (
      <div className="Characters">
        <h1>Characters</h1>
        <div className="u-flex-container-pagination">
          <Pagination
            totalRecords={totalCharacters}
            pageLimit={limit}
            pageNeighbours={1}
            onPageChanged={this.onPageChanged}
          />
        </div>
        <div className="grid-container">
          {characters.map(this.renderCharacter)}
        </div>
      </div>
    )
  }
}

Characters.propTypes = {
  fetchCharacters: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
  totalCharacters: PropTypes.number.isRequired,
  characters: PropTypes.array.isRequired,
  params: PropTypes.object
}

const mapStateToProps = state => ({
  characters: state.characters.characters,
  limit: state.characters.limit,
  totalCharacters: state.characters.totalCharacters,
  params: state.characters.params
})

export default connect(mapStateToProps, {fetchCharacters})(Characters);
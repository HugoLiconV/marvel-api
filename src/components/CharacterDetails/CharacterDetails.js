import React, {Component} from 'react';
import './CharacterDetails.css';
import {connect} from 'react-redux';
import {fetchCharacterById} from "../../actions/characterActions";
import {fetchComicsByCharacter} from "../../actions/comicActions";
import PropTypes from 'prop-types';
import {isObjectEmpty} from "../../utils/utils";
import {getImageUrl} from "../../utils/utils";
import imageSizes from '../../utils/imagesSizes';
import Comic from "../Comics/Comic/Comic";

class CharacterDetails extends Component {

  componentDidMount() {
    const characterId = this.props.match.params.id
    this.props.fetchCharacterById(characterId);
    this.props.fetchComicsByCharacter(characterId)
  }

  renderComic = comic => {
    return (
      <Comic key={comic.id} comic={comic} history={this.props.history}/>
    )
  }

  handleClick = () => {
    const character = this.props.character;
    this.props.history.push(`/characters/${character.id}/comics`)
  }

  render() {
    const character = this.props.character;
    const comics = this.props.comics;
    if (!isObjectEmpty(character)) {
      return (
        <div className="CharacterDetails">
          <div className="character-info-container u-card">
            <div className="cell cell-1">
              <img className="image"
                   src={getImageUrl(character.thumbnail.path, character.thumbnail.extension)} alt={character.name}/>
            </div>
            <div className="cell cell-2">
              <h2>{character.name}</h2>
              <h3>Descripción</h3>
              <p>
                {character.description.length > 0 ? character.description : 'No description'}
              </p>
              <h3>Details</h3>
              <div className="details-container">
                No. Comics: {character.comics.available}
              </div>
            </div>
          </div>
          <h2>Comics: </h2>
          <div className="grid-container" style={{padding: '1rem'}}>
            {comics.length > 0 ? comics.map(this.renderComic) : <p>No comics</p>}
          </div>
          {/*{ characters.length > 20 && <button>See more</button> }*/}
          <button className="u-btn" style={{width: 'auto', padding: '0.5rem 1rem'}} onClick={this.handleClick}>See more</button>
        </div>
      )
    } else {
      return <h2>Loading...</h2>
    }
  }
}


CharacterDetails.propTypes = {
  fetchCharacterById: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
  comics: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  character: state.characters.character,
  comics: state.comics.comics
})

export default connect(mapStateToProps, {fetchCharacterById, fetchComicsByCharacter})(CharacterDetails);

import React, {Component} from 'react';
import './CharacterDetails.css';
import {connect} from 'react-redux';
import {fetchCharacterById} from "../../actions/characterActions";
import PropTypes from 'prop-types';
import {isObjectEmpty} from "../../utils/utils";
import { getImageUrl } from "../../utils/utils";
import  imageSizes from '../../utils/imagesSizes';

class CharacterDetails extends Component {

  componentDidMount() {
    const characterId = this.props.match.params.id
    this.props.fetchCharacterById(characterId);
  }

  render() {
    const character = this.props.character;

    if (!isObjectEmpty(character)) {
      return (
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
      )
    } else {
      return <h2>Loading...</h2>
    }
  }
}


CharacterDetails.propTypes = {
  fetchCharacterById: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  character: state.characters.character
})

export default connect(mapStateToProps, {fetchCharacterById})(CharacterDetails);

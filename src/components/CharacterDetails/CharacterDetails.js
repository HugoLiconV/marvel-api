import React, {Component} from 'react';
import axios from 'axios';
import './CharacterDetails.css';

// import Comics from '../Comics/Comics'

class CharacterDetails extends Component {
  state = {
    character: {}
  }

  getImageUrl = (url, extension) => `${url}/portrait_xlarge.${extension}`

  componentDidMount() {
    const characterId = this.props.match.params.id
    const url = `/characters/${characterId}`
    axios.get(url)
      .then(res => {
        if (res.data.code === 200) {
          const character = res.data.data.results[0];
          this.setState({character})
          console.log(character)
        }
      })
      .catch(error => console.log(error))
  }

  render() {
    const character = this.state.character;
    const isNotEmpty = Object.keys(this.state.character).length !== 0

    if (isNotEmpty) {
      return (
        <div className="character-info-container u-card">
          <div className="cell cell-1">
            <img className="image"
                 src={this.getImageUrl(character.thumbnail.path, character.thumbnail.extension)} alt={character.name}/>
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


export default CharacterDetails;

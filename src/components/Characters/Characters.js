import React from 'react';
import Character from './Character/Character'
import axios from 'axios';
import './Characters.css'
class Characters extends React.PureComponent {
  state = {
    characters: []
  }

  renderCharacter = character => {
    return (
      <Character key={character.id} character={character} history={this.props.history}/>
    )
  }

  componentDidMount(){
    axios.get('/characters')
    .then(res => {
      if (res.data.code === 200) {
        const characters = res.data.data.results
        this.setState({ characters })
      }
    })
  }
  
  render() {
    return (
      <div className="Characters">
        <h1>Characters</h1>
        <div className="grid-container">
          {this.state.characters.map(this.renderCharacter)}
        </div>
      </div>  
    )
  }
}

export default Characters;
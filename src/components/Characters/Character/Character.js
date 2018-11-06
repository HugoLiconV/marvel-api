import React from 'react';
import './Character.css'
const getImageUrl = (url, extension) => `${url}/portrait_xlarge.${extension}`

const Character = (props) => {
  const character = props.character

  const goToDetails = event => {
    event.preventDefault();
    props.history.push(`/characters/${character.id}`)
  }

  return (
    <div className="Character u-card" onClick={goToDetails}>
      <img className="image" src={getImageUrl(character.thumbnail.path, character.thumbnail.extension)} alt=""/>
      <h2>{character.name}</h2>
    </div>
  )
}

export default Character;
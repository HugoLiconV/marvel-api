import React from 'react';
import './Comics.css'
import Comic from "./Comic/Comic";
import './Comics.css'

const Comics = (props) => {

  const renderComic = comic => {
    return (
      <Comic key={comic.id} comic={comic} history={props.history}/>
    )
  }

  return (
    <div className="Comics">
      <h1>Comics</h1>
      <div className="grid-container">
        {props.comics.map(renderComic)}
      </div>
    </div>
  )
}

export default Comics;
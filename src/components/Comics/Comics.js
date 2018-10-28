import React from 'react';
import './Comics.css'
import Comic from "./Comic/Comic";
import './Comics.css'

const Comics = (props) => {
  return (
    <div className="Comics">
      <h1>Comics</h1>
      {console.log(props)}
      <div className="grid-container">
        {props.comics.map(comic=> <Comic key={comic.id} comic={comic}/>)}
      </div>
    </div>
  )
}

export default Comics;
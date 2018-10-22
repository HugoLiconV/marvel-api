import React from 'react';
import './Comics.css'
import Comic from "./Comic/Comic";
import './Comics.css'

const Comics = () => {
  return (
    <div className="Comics">
      <h1>Comics</h1>
      <div className="grid-container">
        <Comic className="card"/>
        <Comic className="card"/>
        <Comic className="card"/>
        <Comic className="card"/>
        <Comic className="card"/>
      </div>
    </div>
  )
}

export default Comics;
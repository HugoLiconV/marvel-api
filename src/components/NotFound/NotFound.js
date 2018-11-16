import React from 'react';
import {Link} from 'react-router-dom'
import './NotFound.css'

const NotFound = () => (
  <div className="NotFound">
    <h1>PAGE NOT FOUND</h1>
    <h2>The page you're looking for will return in Avengers 4</h2>
    <button className="u-btn"><Link to="/comics">Home</Link></button>
  </div>
)

export default NotFound;
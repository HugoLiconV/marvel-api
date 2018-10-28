import React from 'react';
import './Comic.css';
import {withRouter} from 'react-router-dom';

const Comic = (props) => {
  const comic = props.comic
  const goToDetails = e => (console.log(props))

  return (
    <div className="Comic">
      <div className="flex-container">
        <img className="image" src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`} alt="comic"/>
        <div className="details">
          <h3 className="title">{comic.title}</h3>
          <p className="date">{new Date(comic.dates[0]['date']).toLocaleDateString()}</p>
          <p className="pages">{comic.pageCount} pages</p>
          <p className="price">${comic.prices[0]['price']}</p>
          <button className="btn" onClick={goToDetails}>Details</button>
        </div>
      </div>
    </div>
  )
}

export default Comic;
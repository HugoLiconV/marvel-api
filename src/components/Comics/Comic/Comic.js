import React from 'react';
import './Comic.css';
import {withRouter} from 'react-router-dom';

const Comic = (props) => {
  const comic = props.comic
  const comicDate = new Date(comic.dates[0]['date']);
  const localeCode = 'en';
  const goToDetails = e => (console.log(props))
  const getImageUrl = (url, extension) => `${url}/portrait_xlarge.${extension}`

  return (
    <React.Fragment>
      <div className="Comic">
        <img className="image" src={getImageUrl(comic.thumbnail.path, comic.thumbnail.extension)} alt="comic"/>
        <div className="details">
          <h3 className="title">{comic.title}</h3>
          <div className="flex-space"></div>
          <button className="btn" onClick={goToDetails}>Details</button>
          <div className="stats clearfix">
            <div className="one-third">
              <div className="stat">{comicDate.toLocaleString(localeCode, { year: 'numeric' })}</div>
              <div className="stat-value">{comicDate.toLocaleDateString(localeCode, { month: 'short' })}</div>
            </div>

            <div className="one-third">
              <div className="stat">{comic.pageCount}</div>
              <div className="stat-value">Pages</div>
            </div>

            <div className="one-third no-border">
              <div className="stat">${comic.prices[0]['price']}</div>
              <div className="stat-value">Cost</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Comic;
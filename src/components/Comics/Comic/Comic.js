import React from 'react';
import './Comic.css';
import {isObjectEmpty} from '../../../utils';
import PropTypes from 'prop-types';

const Comic = (props) => {
  const comic = props.comic

  if (isObjectEmpty(comic)) return null

  const comicDate = new Date(comic.dates[0]['date']);
  const localeCode = 'en';
  const goToDetails = event => {
    event.preventDefault();
    props.history.push(`/comics/${comic.id}`)
  }
  const getImageUrl = (url, extension) => `${url}/portrait_xlarge.${extension}`

  return (
    <React.Fragment>
      <div className="Comic u-card">
        <img className="image" src={getImageUrl(comic.thumbnail.path, comic.thumbnail.extension)} alt="comic"/>
        <div className="details">
          <h3 className="title">{comic.title}</h3>
          <div className="u-flex-space"></div>
          <button className="u-btn" onClick={goToDetails}>Details</button>
          <div className="stats clearfix">
            <div className="one-third">
              <div className="stat">{comicDate.toLocaleString(localeCode, {year: 'numeric'})}</div>
              <div className="stat-value">{comicDate.toLocaleDateString(localeCode, {month: 'short'})}</div>
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

Comic.propTypes = {
  comic: PropTypes.object.isRequired
}

export default Comic;
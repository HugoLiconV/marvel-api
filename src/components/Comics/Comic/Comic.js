import React from 'react';
import './Comic.css';

const Comic = () => {
  return (
    <div className="Comic">
      <div className="flex-container">
        <div className="image"></div>
        <div className="details">
          <h3 className="title">Title</h3>
          <p className="date">sep. 2010</p>
          <p className="pages">32 pages</p>
          <p className="price">$50.99</p>
          <button className="btn">Details</button>
        </div>
      </div>
    </div>
  )
}

export default Comic;
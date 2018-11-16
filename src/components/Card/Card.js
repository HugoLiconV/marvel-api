import React from 'react';
import './Card.css';
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="Card u-card" onClick={props.handleClick}>
      <img className="image" src={props.imageSrc} alt={props.title}/>
      <h2 className="title">{props.title}</h2>
    </div>
  )
}

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
}

export default Card;
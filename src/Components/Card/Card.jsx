import React from 'react';
import "./Card.css";

const Card = ({image,heading}) => {
  return (
    <div className="card">
        <img src={image} alt="" />
        <span>{heading}</span>
    </div>
  )
}

export default Card;
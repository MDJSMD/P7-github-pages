import React, { useState } from 'react';

const Card = ({id, image, titre}) => {
  const [cardId, setCardId] = useState(id);
  return (
    <div className='card' id={cardId}>
      <img src={image} className='card-img' alt="visuel logement" />
      <span className='card-title'>{titre}</span>
    </div>
  );
};
export default Card;

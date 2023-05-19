import React from 'react';

const TurtCard = () => {

    return (
      <div className="card">
        <h2>{`` /*Turt's name */}</h2>
        <img src={`` /*Turt's image */} alt={'' /* Turt's Name */} className="turt-avatar" />
        <p>{'' /* Turt's Likes */} Likes </p>
        <button className="like-btn">Like {'<3'}</button>
        <button className="del-btn">Donate to GoodWill</button>
      </div>
    );

}

export default TurtCard;

import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image} alt={item.title} />
      <p>{item.title}</p>
    </div>
  );
};

export default Card;

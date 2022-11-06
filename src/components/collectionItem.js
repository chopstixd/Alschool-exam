import React from "react";

function collectionItem({ image, name, price }) {
  return (
    <div className="collectionItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
  );
}

export default collectionItem;
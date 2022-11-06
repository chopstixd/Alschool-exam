import React from "react";
import { collectionList } from "../components/collectionList";
import {Helmet} from "react-helmet";


function Collection() {
  return (

    <div className="collection">
      <Helmet>
       <title> Explore wears and shoes </title>
       <meta name="description" content="Explore new clothes and shoes"/>
      </Helmet>
      <h1 className="collectionTitle">Our Collection</h1>
      <div className="collectionList">
        {collectionList.map((collectionItem, key) => {
          return (
            <collectionItem
              key={key}
              image={collectionItem.image}
              name={collectionItem.name}
              price={collectionItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Collection;
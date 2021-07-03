import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/0.jpg";

function Gallery(props) {
    const currentCategory = {
        name: "commercial",
        description: "Photos of grocery stores, food trucks, and other commercial products",
    };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <img src={photo} 
      alt="Commercial Example"
      className="img-thumbnail mx-1"
      />
    </section>
  );
}
export default Gallery;

import React from "react";
import ReactStars from "react-rating-stars-component";
import "./showBrew.css";
import { useHistory } from "react-router-dom";

const ShowBrewery = ({ name, city,state,type,description, breweryId }) => {
  const history = useHistory();

  const brewClick = () => {
    history.push(`/breweries/${breweryId}`);
  };
  return (
    
    <div className="">
      
      <p>{name}</p>
          <p>
            {city},{state}
          </p>
          <p>{type}</p>
          <p>{description}</p>
     
    </div>
  );
};

export default ShowBrewery;
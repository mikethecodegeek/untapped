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
      
      <p className='brewHeader'>{name}</p>
          <p className='gray brewLocation'>
            {city},{state}
          </p>
          <p className="gray brewType">{type}</p>
          <p className='gray brewDescription'>{description}</p>
     
    </div>
  );
};

export default ShowBrewery;
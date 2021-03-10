import React from "react";
import ReactStars from "react-rating-stars-component";
import "./showBrew.css";
import { useHistory } from "react-router-dom";

const ShowBrewery = ({ name, city,state,type,description, breweryId,image }) => {
  const history = useHistory();
 
  const brewClick = () => {
    history.push(`/breweries/${breweryId}`);
  };
  return (
    
    <div className="">
      <div className="flex-between">
          <div>
      <p className='brewHeader'>{name}</p>
          <p className='gray brewLocation'>
            {city},{state}
          </p>
          <p className="gray brewType">{type}</p>
          <p className=' brewDescription'>{description}</p>
          </div>
          <div className="brewImageDiv">
      <img className="brewImage" src={image} />

          </div>
      </div>
     
    </div>
  );
};

export default ShowBrewery;
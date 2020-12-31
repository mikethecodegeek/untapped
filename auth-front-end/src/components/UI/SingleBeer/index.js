import React, {useParams} from "react";
import ReactStars from "react-rating-stars-component";
import "./showbeer.css";
import { useHistory } from "react-router-dom";
import ModalComponent from '../../Modal'
const ShowBeer = ({ name, type,abv,ibu,rating, breweryName, breweryId,id }) => {
  const history = useHistory();
  // const {id} = useParams()
  const brewClick = () => {
    history.push(`/breweries/${breweryId}`);
  };
  return (
    
    <div className="beerBox section">
      
        <p className='beerName'>{name}</p>
        <p className='breweryName link' onClick={() => brewClick(breweryId)}>
          {breweryName}
        </p>
        <p className='beerType'>{type}</p>
        <div className='flex'>
          <p className='gray box'>{abv}%ABV</p>
          <p className="gray box">{ibu} IBU</p>
        <ModalComponent id={id} />
        </div>
        <p className="gray">{rating}</p>
     
    </div>
  );
};

export default ShowBeer;

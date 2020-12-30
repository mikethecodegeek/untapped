import React from 'react';
import ReactStars from "react-rating-stars-component";
import './userCheckin.css';
import {useHistory} from 'react-router-dom';

const UserCheckin = ({username,beer,brewery,rating, beerId,breweryId,comment}) => {
   const history = useHistory();
   const nameClick = () => {
       history.push(`/users/${username}`)
   }
   const beerClick = () => {
       history.push(`/beers/${beerId}`)
   }
   const brewClick = () => {
       history.push(`/breweries/${breweryId}`)
   }
    return (
        <div className='checkinContainer'>
             <p><span onClick={nameClick} className='link'>{username} </span> is drinking a <span onClick={beerClick} className='link'>{beer}</span> by <span onClick={brewClick} className='link'>{brewery}</span></p>
             <p>{comment}</p>
             <ReactStars
                count={5}
                value={rating}
                size={24}
                edit={false}
                activeColor="#ffd700"
  />
        </div>
    )
}

export default UserCheckin;
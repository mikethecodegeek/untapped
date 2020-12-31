import React, { useState,useParams } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
// import { Redirect } from "react-router-dom";
// import * as sessionActions from "../../store/session";
import {newCheckin} from '../../store/checkin'

function CheckinPage({id}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  // const {id} = useParams()

  const [pic, setPic] = useState("");
  const [description, setDescription] = useState("");
  const [beerId, setBeer] = useState("");
  const [rating, setRating] = useState("");
  // const [errors, setErrors] = useState([]);

//   if (sessionUser) return <Redirect to="/" />;
const changeRating = (newRating) => {
  setRating(newRating);
};

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {pic,description,beerId:id,rating,sessionUser}
    dispatch(newCheckin(data))

  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {/* {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))} */}
      </ul>
      {/* <label>
        Pic
        <input
          type="text"
          value={pic}
          onChange={(e) => setPic(e.target.value)}
          required
        />
      </label> */}
      {/* <label>
        Beer
        <input
          type="number"
          value={id}
          onChange={(e) => setBeer(e.target.value)}
          required
        />
      </label> */}
     
        
        <textarea
          placeholder='How was it?'
          value={description}
          rows='5'
          className='checkinText'
          onChange={(e) => setDescription(e.target.value)}
          required
        />
     
      
        {/* <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        /> */}
        
        <ReactStars
          count={5}
          className='checkinRating'
          onChange={changeRating}
          size={24}
          activeColor="#ffd700"
        />
     
     
      <button className='confirmButton' type="submit">Confirm</button>
    </form>
  );
}

export default CheckinPage;
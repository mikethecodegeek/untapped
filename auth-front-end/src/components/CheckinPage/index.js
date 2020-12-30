import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
// import * as sessionActions from "../../store/session";
import {newCheckin} from '../../store/checkin'

function CheckinPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [pic, setPic] = useState("");
  const [description, setDescription] = useState("");
  const [beerId, setBeer] = useState("");
  const [rating, setRating] = useState("");
  // const [errors, setErrors] = useState([]);

//   if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {pic,description,beerId,rating,sessionUser}
    dispatch(newCheckin(data))
  
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {/* {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))} */}
      </ul>
      <label>
        Pic
        <input
          type="text"
          value={pic}
          onChange={(e) => setPic(e.target.value)}
          required
        />
      </label>
      <label>
        Beer
        <input
          type="number"
          value={beerId}
          onChange={(e) => setBeer(e.target.value)}
          required
        />
      </label>
      <label>
        Description
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Rating
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
      </label>
     
      <button type="submit">Check In</button>
    </form>
  );
}

export default CheckinPage;
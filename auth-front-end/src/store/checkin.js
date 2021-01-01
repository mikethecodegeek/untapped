// frontend/src/store/session.js
import { fetch } from './csrf';

const GET_ALL_CHECKINS = 'beers/GetAllCheckins';
const GET_SINGLE_CHECKIN = 'beers/GetSingleCheckin';
const ADD_CHECKIN = 'beers/addCheckin';
// const NEW_CHECKIN = 'beers/newCheckin';

const getCheckins = (checkins) => {
  return {
    type: GET_ALL_CHECKINS,
    checkins
  };
};
const addCheckin = (checkin) => {
  return {
    type: ADD_CHECKIN,
    checkin
  };
};

// const getBeerCheckins = (checkins) => {
//   return {
//     type: GET_ALL_CHECKINS,
//     checkins
//   };
// };

const getSingleCheckin = (checkin) => {
  return {
    type: GET_SINGLE_CHECKIN,
    checkin
  };
};


export const getAllCheckins = () => async dispatch => {
    const checkins = await fetch('/api/checkins');
    dispatch(getCheckins(checkins.data));
    return checkins.data;
  };

export const getBeerCheckins = (id) => async dispatch => {
    const checkins = await fetch(`/api/beer/${id}/checkins`);
    dispatch(getCheckins(checkins.data.reverse()));
    return checkins.data;
  };

  export const getBreweryCheckins = (id) => async dispatch => {
    const checkins = await fetch(`/api/breweries/${id}/checkins`);
    dispatch(getCheckins(checkins.data.reverse()));
    return checkins.data;
  };

  export const getUserCheckins = (name) => async dispatch => {
    const checkins = await fetch(`/api/users/${name}/checkins`);
    dispatch(getCheckins(checkins.data.reverse()));
    return checkins.data;
  };


export const getCheckin = (id) => async dispatch => {
    const checkin = await fetch(`/api/checkins/${id}`);
    console.log(checkin)
    dispatch(getSingleCheckin(checkin.data.reverse));
    return checkin.data;
  };

export const newCheckin = (data) => async dispatch => {
    console.log(data)
    const checkin = await fetch(`/api/checkins/`,{method:'post',body: JSON.stringify({data})});
    console.log(checkin.data)
    dispatch(addCheckin(checkin.data.checkedIn));
    return checkin.data;
  };


const initialState = [];

const checkinReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_CHECKINS:
      newState = Object.assign({}, state);
      newState.checkins = action.checkins;
      return action.checkins;
    case ADD_CHECKIN:
      newState = [action.checkin,...state];
      console.log(newState)
      return newState;
      
    case GET_SINGLE_CHECKIN:
      newState = Object.assign({}, state);
      newState.checkin = action.checkin;
      return action.checkin;
   
    default:
      return state;
  }
};

export default checkinReducer;
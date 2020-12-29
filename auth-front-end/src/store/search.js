// frontend/src/store/session.js
import { fetch } from './csrf';


const FIND_BEERS_AND_BREWS = 'search/FindBeersAndBrews';

const findBeersAndBrews = (beers) => {
  return {
    type: FIND_BEERS_AND_BREWS,
    beers
  };
};


export const searchBeersAndBrews = (search) => async dispatch => {
    const beers = await fetch(`/api/beer/search/${search}`);
    dispatch(findBeersAndBrews(beers.data));
    // console.log(beers.data)
    return beers.data;
  };





const initialState = {};

const searchReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case FIND_BEERS_AND_BREWS:
      newState = Object.assign({}, state);
      newState.beers = action.beers;
      return action.beers;
 
    default:
      return state;
  }
};

export default searchReducer;
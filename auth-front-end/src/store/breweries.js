// frontend/src/store/session.js
import { fetch } from './csrf';

const GET_ALL_BREWERIES = 'beers/GetAllBreweries';
const GET_SINGLE_BREWERY = 'beers/GetSingleBrewery';

const getBreweries = (breweries) => {
  return {
    type: GET_ALL_BREWERIES,
    breweries
  };
};

const getSingleBrewery = (brewery) => {
    return {
      type: GET_SINGLE_BREWERY,
      brewery
    };
  };
  


export const getAllBreweries = () => async dispatch => {
    const breweries = await fetch('/api/breweries');
    dispatch(getBreweries(breweries.data));
    // console.log(beers.data)
    return breweries.data;
  };

  export const getBrewery = (id) => async dispatch => {
    const brewery = await fetch(`/api/breweries/${id}`);
    dispatch(getSingleBrewery(brewery.data));
    return brewery.data;
  };



const initialState = [];

const breweryReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_BREWERIES:
    //   newState = Object.assign({}, state);
    //   newState.beers = action.beers;
      return action.breweries;
    case GET_SINGLE_BREWERY:
      newState = Object.assign({}, state);
      newState.brewery = action.brewery;
      return action.brewery;
   
    default:
      return state;
  }
};

export default breweryReducer;
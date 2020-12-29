// frontend/src/store/session.js
import { fetch } from './csrf';

const GET_ALL_BEERS = 'beers/GetAllBeers';
const GET_SINGLE_BEER = 'beers/GetSingleBeer';

const getBeers = (beers) => {
  return {
    type: GET_ALL_BEERS,
    beers
  };
};

const getSingleBeer = (beer) => {
  return {
    type: GET_SINGLE_BEER,
    beer
  };
};


export const getAllBeers = () => async dispatch => {
    const beers = await fetch('/api/beer');
    dispatch(getBeers(beers.data));
    // console.log(beers.data)
    return beers.data;
  };


export const getBeer = (id) => async dispatch => {
    const beer = await fetch(`/api/beer/${id}`);
    dispatch(getSingleBeer(beer.data));
    return beer.data;
  };



const initialState = [];

const beerReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_BEERS:
      newState = Object.assign({}, state);
      newState.beers = action.beers;
      return action.beers;
    case GET_SINGLE_BEER:
      newState = Object.assign({}, state);
      newState.beer = action.beer;
      return action.beer;
   
    default:
      return state;
  }
};

export default beerReducer;
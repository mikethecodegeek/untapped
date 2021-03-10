import React from 'react';
import Beers from './Beers'
import Breweries from './Breweries'
import './Showcase.css'

function Showcase({limit}){
 

  return (
      <>
     <Beers limit={limit} />
     <Breweries limit={limit} />
    </>
  );
}

export default Showcase;
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getHomeBeers } from "../../store/beer";
import './Showcase.css'

function Beers(){
 
    const dispatch = useDispatch();
    const history = useHistory();
    const beerShowcase = useSelector((state) => state.beers);

  
    useEffect(() => {
      dispatch(getHomeBeers());
    }, []);

    useEffect(()=>{
        if (beerShowcase) {
            console.log(beerShowcase)
        }
    },[beerShowcase])

  return (
      <>
      <h1 className='showcase-title'>POPULAR BEERS</h1>
    <div className='beer-section'>

        {beerShowcase.length > 0 &&
        beerShowcase.map(beer => {

       return <div className='single'>
           <div onClick={()=>history.push(`/beers/${beer.id}`)} className='single-content'>
            <img className='single-img' src={beer.imgUrl}></img>
            <p className='single-title'>{beer.name}</p>
            </div>
        </div>
        })
        }
        
    </div>
    </>
  );
}

export default Beers;
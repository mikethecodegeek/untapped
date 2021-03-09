import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getHomeBreweries } from "../../store/breweries";
import './Showcase.css'

function Breweries(){
 
    const dispatch = useDispatch();
    const history = useHistory();
    const breweryShowcase = useSelector((state) => state.breweries);

  
    useEffect(() => {
      dispatch(getHomeBreweries());
    }, []);

    // useEffect(()=>{
    //     if (beerShowcase) {
    //         console.log(beerShowcase)
    //     }
    // },[beerShowcase])

  return (
      <>
      <h1 className='showcase-title'>POPULAR BREWERIES</h1>
    <div className='beer-section'>

        {breweryShowcase.length > 0 &&
        breweryShowcase.map(brewery => {

       return <div className='single'>
           <div onClick={()=>history.push(`/breweries/${brewery.id}`)} className='single-content'>
            <img className='single-img' src={brewery.imgUrl}></img>
            <p className='single-title'>{brewery.name}</p>
            </div>
        </div>
        })
        }
        
    </div>
    </>
  );
}

export default Breweries;
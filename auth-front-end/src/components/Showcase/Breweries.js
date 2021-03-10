import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getHomeBreweries } from "../../store/breweries";
import './Showcase.css'

function Breweries({limit}){
    const [limitBrews, setLimitBrews] = useState([])
    const [numBeers, setNumbeers] = useState('beer-section')
    const [singleContent,setSingleContent] = useState('single-content')
    const dispatch = useDispatch();
    const history = useHistory();
    const breweryShowcase = useSelector((state) => state.breweries);

  
    useEffect(() => {
        if (limit > 6) {
            setNumbeers('profile-view')
            setSingleContent('single-content-profile')
        }
        dispatch(getHomeBreweries());
    }, []);

    useEffect(()=>{
        if (breweryShowcase.length>5 && limit) {
            
            const newBrews = []
            for (let a=0; a< limit; a++) {
                newBrews.push(breweryShowcase[a])
            }
            // console.log(newBrews)
            setLimitBrews(newBrews)
        }
    },[breweryShowcase])

  return (
      <>
      {limit < 20 ?
      <h1 className='showcase-title'>POPULAR BREWERIES</h1> :
      <h1 className='showcase-title'>EXPLORE BREWERIES</h1> 
    }
    <div className={numBeers}>

        {limitBrews.length > 0 &&
        limitBrews.map(brewery => {
            // console.log(brewery)
       return <div key={brewery.id} className='single'>
           <div onClick={()=>history.push(`/breweries/${brewery.id}`)} className={singleContent}>
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
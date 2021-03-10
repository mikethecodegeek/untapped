import React,{useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getHomeBeers } from "../../store/beer";
import './Showcase.css'

function Beers({limit}){
    
    const [limitBeers, setLimitBeers] = useState([])
    const [numBeers, setNumbeers] = useState('beer-section')
    const [singleContent,setSingleContent] = useState('single-content')
    const dispatch = useDispatch();
    const history = useHistory();
    const beerShowcase = useSelector((state) => state.beers);

  
    useEffect(() => {
        if (limit > 6) {
            setNumbeers('profile-view')
            setSingleContent('single-content-profile')
        }
      dispatch(getHomeBeers());
    }, []);

    useEffect(()=>{
        if (beerShowcase.length>5 && limit) {
            console.log(beerShowcase)
            const newBeers = []
            for (let a=0; a< limit; a++) {
                newBeers.push(beerShowcase[a])
            }
            setLimitBeers(newBeers)
        }
    },[beerShowcase])

  return (
      <>
      {limit < 20 ?
      <h1 className='showcase-title'>POPULAR BEERS</h1> :
      <h1 className='showcase-title'>EXPLORE BEERS</h1> 
    }
    
    <div className={numBeers}>
        
        {beerShowcase.length >0 && limitBeers.length>0 &&
        limitBeers.map(beer => {
            console.log(limitBeers)

       return <div key={beer.id} className='single'>
           <div onClick={()=>history.push(`/beers/${beer.id}`)} className={singleContent}>
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
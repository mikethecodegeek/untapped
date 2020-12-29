import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getBrewery} from '../../store/breweries'


const SingleBrewery = () => {
    const dispatch = useDispatch();
    const {id } = useParams();
    const brewery = useSelector(state => state.breweries[0]);
    useEffect(()=>{
        dispatch(getBrewery(id))
    },[])

    if (!brewery || !brewery.BreweryType) return null
    
    return (
        <div>
            <h2>Single Brewery</h2>
            { 

            <div>     
                <p>{brewery.name}</p>
                <p>{brewery.city},{brewery.state}</p>
                <p>{brewery.BreweryType.name}</p>
                <p>{brewery.description}</p>
            </div>
            }

        </div>
    )
}

export default SingleBrewery;
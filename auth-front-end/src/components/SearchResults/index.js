import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import {searchBeersAndBrews} from '../../store/search'


const SearchResults = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { name } = useParams();
    const beer = useSelector(state => state.search);
   

    useEffect(()=>{
        dispatch(searchBeersAndBrews(name))
    },[name])

    const handleBreweryClick = (id) => {
        history.push(`/breweries/${id}`)
    }

    const handleBeerClick = (id) => {
        history.push(`/beers/${id}`)
    }

    return (
        <div>
            <h2>Search</h2>
            <h3>Beers</h3>
            {
              beer.beers ? beer.beers.map(beer=> {
              return <div>
                 <p onClick={()=>handleBeerClick(beer.id)}>{beer.name}</p>
                 <p onClick={()=>handleBreweryClick(beer.Brewery.id)}>{beer.Brewery.name}</p>
                 <p>{beer.Type.name}</p>
              </div>
            }) : []
            }
            <h3>Breweries</h3>
            { 
             beer.brewers ? beer.brewers.map(brewer=> <p onClick={()=>handleBreweryClick(brewer.id)}>{brewer.name}</p>) : []
            }
            {
            //    <p>{beer.name}</p>
            }

        </div>
    )
}

export default SearchResults;
import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {getAllBreweries} from '../../store/breweries'


const Breweries = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const breweries = useSelector(state => state.breweries);
    // console.log(beers)
    useEffect(()=>{
        dispatch(getAllBreweries())
    },[])

    const handleBreweryClick = (id) => {
        history.push(`/breweries/${id}`)
    }

    return (
        <div>
            <h2>All Brewers</h2>
            {/* {
                breweries.map(brewer=>brewer.name)
            } */}

{
                breweries.map(brew=> {
                 return <p onClick={()=>handleBreweryClick(brew.id)}>{brew.name}</p>
                }
                )
            }

        </div>
    )
}

export default Breweries;
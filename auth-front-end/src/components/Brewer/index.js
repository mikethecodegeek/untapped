import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react'
import {getAllBreweries} from '../../store/breweries'

const Breweries = () => {
    const dispatch = useDispatch();
    const breweries = useSelector(state => state.breweries);
    // console.log(beers)
    useEffect(()=>{
        dispatch(getAllBreweries())
    },[])

    return (
        <div>
            <h2>All Brewers</h2>
            {
                breweries.map(brewer=>brewer.name)
            }

        </div>
    )
}

export default Breweries;
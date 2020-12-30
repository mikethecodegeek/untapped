import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react'
import {getAllBeers} from '../store/beer'
import {useHistory } from "react-router-dom";

const Beers = () => {
    const dispatch = useDispatch();
    const beers = useSelector(state => state.beers);
    const history = useHistory();
    console.log(beers)
    useEffect(()=>{
        dispatch(getAllBeers())
    },[])

    const handleBeerClick = (id) => {
        history.push(`/beers/${id}`)
    }

    return (
        <div>
            <h2>All Beers</h2>
            {
                beers.map(beer=> {
                 return <p onClick={()=>handleBeerClick(beer.id)}>{beer.name}</p>
                }
                )
            }

        </div>
    )
}

export default Beers;


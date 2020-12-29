import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getBeer} from '../../store/beer'
import {getBeerCheckins} from '../../store/checkin'


const SingleBeer = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const beer = useSelector(state => state.beers[0]);
    const checkins = useSelector(state => state.checkins);
    // const beer = useSelector(state => state);
    console.log(checkins)

    useEffect(()=>{
        dispatch(getBeer(id))
        dispatch(getBeerCheckins(id))
    },[])

    return (
        <div>
            <h2>Single Beer</h2>
            {
                <div>
                    <p>{beer.name}</p>
                    <p>{beer.Brewery.name}</p>
                    <p>{beer.Type.name}</p>
                    <p>{beer.abv}%ABV</p>
                    <p>{beer.ibu} IBU</p>
                    <p>{beer.description}</p>
                </div>
            }

            {
                <div>
                    <h2>Checkins</h2>
                    {checkins.map(checkin => {
                      return  <div> 
                            <p>{checkin.User.username}</p>
                            <p>{checkin.rating}</p>
                            <p>{checkin.pic}</p>
                            <p>{checkin.description}</p>
                        </div>
                    })}
                </div>
            }

        </div>
    )
}

export default SingleBeer;
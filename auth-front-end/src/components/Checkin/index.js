import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react'
import {getCheckin} from '../../store/checkin'
import {useParams} from 'react-router-dom'


const Checkin = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const checkins = useSelector(state => state.checkins);
    console.log(checkins)
    useEffect(()=>{
        dispatch(getCheckin(id))
    },[])

    return (
        <div>
            <h2>Checkin</h2>
            { checkins && 
                checkins.map(checkin=>{
                    if (checkin.User && checkin.Beer && checkin.Brewery) {

                        return <div>
                            <p>{checkin.User.username}</p>
                            <p>{checkin.Beer.name}</p>
                            <p>{checkin.Brewery.name}</p>
                            <p>{checkin.rating}</p>
                        </div>
                    }
                })
            }

        </div>
    )
}

export default Checkin;
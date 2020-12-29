import {useSelector,useDispatch} from 'react-redux';
import {useEffect,useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {getBeer} from '../../store/beer'
import { set } from 'js-cookie';


const SearchBar = () => {
    // const dispatch = useDispatch();
    // const {id } = useParams();
    // const beer = useSelector(state => state.beers[0]);
    // console.log(beer)
    // useEffect(()=>{
    //     dispatch(getBeer(id))
    // },[])
    const [searchTerm, setSearchTerm] = useState()
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/beers/search/${searchTerm}`)
    }

    return (
        <div>
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={(e)=>setSearchTerm(e.target.value)} value={searchTerm}></input>
                <button type='submit'>Search</button>
            </form>

        </div>
    )
}

export default SearchBar;
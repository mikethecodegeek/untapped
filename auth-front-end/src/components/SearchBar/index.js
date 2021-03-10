// import {useSelector,useDispatch} from 'react-redux';
import { useState } from "react";
import { useHistory } from "react-router-dom";
// import {getBeer} from '../../store/beer'
// import { set } from 'js-cookie';
import "./searchbar.css";

const SearchBar = ({style}) => {
  // const dispatch = useDispatch();
  // const {id } = useParams();
  // const beer = useSelector(state => state.beers[0]);
  // console.log(beer)
  // useEffect(()=>{
  //     dispatch(getBeer(id))
  // },[])
  const [searchTerm, setSearchTerm] = useState();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm('')
    history.push(`/beers/search/${searchTerm}`);
  };

  return (
    <div className={style}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder='Find a beer or brewery (ex.. Bud, IPA, Lager)'
        ></input>
        {/* +<button type='submit'>Search</button> */}
      </form>
    </div>
  );
};

export default SearchBar;

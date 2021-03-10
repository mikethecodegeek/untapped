import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAllBreweries } from "../../store/breweries";
import SearchBar from "../SearchBar";
import {getHomeBeers} from '../../store/beer'
import Showcase from '../Showcase/Showcase'
import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const breweries = useSelector((state) => state.breweries);
  // const beers = useSelector((state) => state.beers);
  // console.log(beers)
  useEffect(() => {
    // dispatch(getAllBreweries());
    // dispatch(getHomeBeers());
  }, []);

  const handleBreweryClick = (id) => {
    history.push(`/breweries/${id}`);
  };

  return (
    <div>
      <div className="hero-section">
        <div className="hero-text">
          <div className='flex-vert'>
            <h1 className="hero-title">UNTAPPD</h1>
            <p className="hero-sub">DRINK SOCIALLY</p>
            <p className="sub-title">Discover and share your favorite beer.</p>
          </div>
        </div>
      </div>
      <SearchBar />
      <Showcase limit={6} />
    </div>
  );
};

export default Home;

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { searchBeersAndBrews } from "../../store/search";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./searchResults.css";
import SearchBar from "../SearchBar";

const SearchResults = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { name } = useParams();
  const [extraBeers, setExtraBeers] = useState([]);
  const beer = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(searchBeersAndBrews(name));
  }, [name]);

  const handleBreweryClick = (id) => {
    history.push(`/breweries/${id}`);
  };

  const handleBeerClick = (id) => {
    history.push(`/beers/${id}`);
  };

  return (
    <div className="container">
      <SearchBar />
      <Tabs>
        <TabList>
          <Tab>Beers {beer.beers && beer.beers.length}</Tab>
          <Tab>Breweries {beer.brewers && beer.brewers.length}</Tab>
        </TabList>

        <TabPanel>
          {beer.beers
            ? beer.beers.map((beer) => {
                return (
                  <div className="section flex-between bb">
                      <div>

                    <p
                      className="link"
                      onClick={() => handleBeerClick(beer.id)}
                      >
                      {beer.name}
                    </p>
                    <p
                      className="link beerSearchBrew"
                      onClick={() => handleBreweryClick(beer.Brewery.id)}
                      >
                      {beer.Brewery.name}
                    </p>
                    <p className="gray beerSearchType">{beer.Type.name}</p>
                        </div>
                    <img className='search-image' src={beer.imgUrl}></img>
                  </div>
                );
              })
            : []}
        </TabPanel>
        <TabPanel>
          {beer.brewers
            ? beer.brewers.map((brewer) => (
                <div className="section flex-between">
                  <div>
                    <p
                      class="link"
                      onClick={() => handleBreweryClick(brewer.id)}
                    >
                      {brewer.name}
                    </p>
                    <p class="gray brewSearchLocation">
                      {brewer.city}, {brewer.state}
                    </p>
                    <p class="gray brewSearchType">{brewer.BreweryType.name}</p>
                  </div>
                  <img className='search-image' src={brewer.imgUrl}></img>
                </div>
              ))
            : []}
          {
            //    <p>{beer.name}</p>
          }
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SearchResults;

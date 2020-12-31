import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { searchBeersAndBrews } from "../../store/search";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./searchResults.css";

const SearchResults = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { name } = useParams();
  const [extraBeers,setExtraBeers] = useState([])
  const beer = useSelector((state) => state.search);
 console.log(beer)
  
 useEffect(() => {
     dispatch(searchBeersAndBrews(name));
    }, [name]);
 
//  useEffect(() => {
//      if (beer.brewers) {
//         setExtraBeers(beer.brewers.map(brewer => brewer.Beers.map(beer => beer)))
//      }
    
//   }, [beer.brewers]);

//   let defaultIndex = 0;
//   useEffect(() => {
//     if (beer.beers && beer.brewers) {
//       beer.beers.length > beer.brewers.length
//         ? (defaultIndex = 0)
//         : (defaultIndex = 1);
//     }
//     console.log(defaultIndex);
//   }, [beer.beers.length, beer.brewers.length]);

  const handleBreweryClick = (id) => {
    history.push(`/breweries/${id}`);
  };

  const handleBeerClick = (id) => {
    history.push(`/beers/${id}`);
  };

  return (
    <div className="container">
      <Tabs>
        <TabList>
          <Tab>Beers {beer.beers && beer.beers.length}</Tab>
          <Tab>Breweries {beer.brewers && beer.brewers.length}</Tab>
        </TabList>

        <TabPanel>
          {beer.beers
            ? beer.beers.map((beer) => {
                return (
                  <div className="section">
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
                );
              })
            : []}

          {/* {extraBeers.map((beer) => {
                return (
                  <div className="section">
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
                );
              })
            } */}
            
        </TabPanel>
        <TabPanel>
          {beer.brewers
            ? beer.brewers.map((brewer) => (
                <div className="section">
                  <p class="link" onClick={() => handleBreweryClick(brewer.id)}>
                    {brewer.name}
                  </p>
                  <p class="gray brewSearchLocation">
                    {brewer.city}, {brewer.state}
                  </p>
                  <p class="gray brewSearchType">{brewer.BreweryType.name}</p>
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

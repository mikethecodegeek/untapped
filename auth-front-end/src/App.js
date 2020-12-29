// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Beers from './components/Beers'
import Breweries from './components/Breweries'
import SingleBeer from './components/SingleBeer'
import SingleBrewery from './components/SingleBrewery'
import SearchResults from './components/SearchResults'
import CheckinPage from './components/CheckinPage'



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/checkins">
            <CheckinPage />
          </Route>
          <Route path="/beers/search/:name">
            <SearchResults />
          </Route>
          <Route path="/beers/:id">
            <SingleBeer />
          </Route>
          <Route path="/beers">
            <Beers />
          </Route>
          <Route path="/breweries/:id">
            <SingleBrewery />
          </Route>
          <Route path="/breweries">
            <Breweries />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
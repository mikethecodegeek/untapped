// frontend/src/App.js
import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
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
import Checkin from './components/Checkin'
import Profile from './components/Profile'
import Home from './components/Home'
import Footer from './components/Footer/Footer'



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector((state) => state.session);
  let customNav= 'nav-bar';
  if (user.user) customNav = 'nav-bar orange' 
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} style={customNav} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/users/:name">
            <Profile />
          </Route>
          <Route path="/checkins/:id">
            <Checkin />
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
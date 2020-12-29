import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import '../SearchBar'
import SearchBar from '../SearchBar';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className='nav-button' to="/login">SIGN IN</NavLink>
        <NavLink className='nav-button' to="/signup">CREATE AN ACCOUNT</NavLink>
      </>
    );
  }

  return (
    <div className='nav-bar'>

      <ul>
        <li>
        <NavLink className='nav-button' to="/beers">SEE ALL BEERS</NavLink>
        <NavLink className='nav-button' to="/breweries">SEE ALL BREWERS</NavLink>
          {sessionLinks}
          {/* <NavLink exact to="/">Home</NavLink>
          {isLoaded && sessionLinks} */}
        </li>
      </ul>
          <SearchBar /> 

    </div>
  );
}

export default Navigation;
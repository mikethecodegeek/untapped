import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import '../SearchBar'
import SearchBar from '../SearchBar';

function Navigation({ isLoaded, style }){
  const sessionUser = useSelector(state => state.session.user);
  const history= useHistory()
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <h1 className='nav-logo' onClick={()=>history.push('/')}>UNTAPPD</h1>
      <div>
      <ul>
        <li>

      <ProfileButton user={sessionUser} />
        </li>
      </ul>
      <SearchBar style='searchBar' /> 
      </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
     

      <h1 className='nav-logo' onClick={()=>history.push('/')}>UNTAPPD</h1>
      <div>
        <NavLink className='nav-button' to="/login">SIGN IN</NavLink>
        <NavLink className='nav-button' to="/signup">CREATE AN ACCOUNT</NavLink>
      </div>
     
      </>
    );
  }

  return (
    <div className={style}>

   
          {sessionLinks}
         

    </div>
  );
}

export default Navigation;
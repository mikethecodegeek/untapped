// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  
  const sessionUser = useSelector(state => state.session.user);
  const name = sessionUser.username;
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const getProfile = () => {
    history.push(`/users/${name}`)
  }
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  return (
    <>
      <button className='userButton' onClick={openMenu}>
        <i className="fas fa-user-circle two" />
       
      </button>
      {showMenu && (
        <ul className="profile-dropdown fixed">
          <li> 
          <button onClick={getProfile}> My Profile</button>
          </li>
          {/* <li>{user.username}</li>
          <li>{user.email}</li> */}
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
// frontend/src/components/LoginFormPage/index.js
import React, { useState } from 'react';
import * as sessionActions from '../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  }

  return (
    <div className="container">
    <div className="section max500 sign-in-form">
      <h2 className='text-center'>Sign In</h2>
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
     
        <input
          type="text"
          value={credential}
          placeholder='Username or Email'
          onChange={(e) => setCredential(e.target.value)}
          required
        />
     
     
        <input
          type="password"
          value={password}
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
     
      <button className="signup-button" type="submit">Log In</button>
      <button className="signup-button" onClick={(e)=> {
        setCredential('demo@user.io')
        setPassword('password')
        return dispatch(sessionActions.login({ credential, password }))
      }}>Demo User</button>
    </form>
    </div>
    </div>
  );
}

export default LoginFormPage;
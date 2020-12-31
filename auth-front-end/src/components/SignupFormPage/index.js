// frontend/src/components/SignupFormPage/index.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <div className="container">
      <div className="section max500">
       
         <h2 className='text-center'>Create an account</h2>
            <form  onSubmit={handleSubmit}>
              <ul>
                {errors.map((error, idx) => (
                  <li key={idx}>{error}</li>
                ))}
              </ul>

              <input
                type="text"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="text"
                value={username}
                placeholder="Enter a username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <input
                type="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <input
                type="password"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <button className='signup-button' type="submit">Sign Up</button>
            </form>
      
      </div>
    </div>
  );
}

export default SignupFormPage;

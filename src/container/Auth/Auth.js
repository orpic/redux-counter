import React from "react";
import "./Auth.css";

import { useDispatch } from "react-redux";
import { authActions } from "../../store";

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authActions.login());
  };
  return (
    <div className="container-center">
      <div className="auth-form container-center">
        <label className="label">email</label>
        <input className="ipnut-field" type="text" />
        <label className="label">password</label>
        <input className="ipnut-field" type="password" />
        <button onClick={loginHandler} className="btn">
          login
        </button>
      </div>
    </div>
  );
};

export default Auth;

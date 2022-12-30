import React from "react";
import "./Header.css";

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store";

const Header = () => {
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authActions.login());
  };
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <header className="header container-center">
      <div className="logo">Redux Auth</div>
      {isAuth && (
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a className="main-nav-link" href="#EmptyLink">
                My Products
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#EmptyLink">
                My Sales
              </a>
            </li>
            <li>
              <a
                onClick={logoutHandler}
                className="btn main-nav-link"
                href="#EmptyLink"
              >
                Logout
              </a>
            </li>
          </ul>
        </nav>
      )}
      {!isAuth && (
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a
                onClick={loginHandler}
                className="btn main-nav-link"
                href="#EmptyLink"
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

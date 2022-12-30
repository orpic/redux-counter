import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header container-center">
      <div className="logo">Redux Auth</div>
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
            <a className="btn main-nav-link" href="#EmptyLink">
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

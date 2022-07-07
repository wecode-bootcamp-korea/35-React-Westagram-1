import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="navwrap">
      <div className="navbar">
        <div className="logo">
          <a className="logo-text" href="./main.html">
            Westagram
          </a>
        </div>
        <div className="search">
          <img alt="Search icon" src="/images/magnifying-glass.png" />
          <input type="text" placeholder="검색" />
        </div>
        <div className="icons">
          <a href="/">
            <img
              alt="Home icon"
              src="/images/house-black-silhouette-without-door.png"
            />
          </a>
          <a href="/">
            <img alt="Send icon" src="/images/send.png" />
          </a>
          <a href="/">
            <img alt="Add icon" src="/images/add.png" />
          </a>
          <a href="/">
            <img alt="Compass icon" src="/images/compass.png" />
          </a>
          <a href="/">
            <img alt="Like icon" src="/images/like.png" />
          </a>
          <a href="/">
            <span className="profile">
              <img alt="profile" src="/images/profile.JPG" />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

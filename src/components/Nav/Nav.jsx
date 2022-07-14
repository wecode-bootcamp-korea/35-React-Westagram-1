import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="navwrap">
      <div className="navbar">
        <div className="logo">
          <Link to="/main-minjee" className="logo-text">
            Westagram
          </Link>
        </div>
        <div className="search">
          <img alt="Search icon" src="/images/magnifying-glass.png" />
          <input type="text" placeholder="검색" />
        </div>
        <div className="icons">
          <Link to="/main-minjee">
            <img
              alt="Home icon"
              src="/images/house-black-silhouette-without-door.png"
            />
          </Link>
          <Link to="/main-minjee">
            <img alt="Send icon" src="/images/send.png" />
          </Link>
          <Link to="/main-minjee">
            <img alt="Add icon" src="/images/add.png" />
          </Link>
          <Link to="/main-minjee">
            <img alt="Compass icon" src="/images/compass.png" />
          </Link>
          <Link to="/main-minjee">
            <img alt="Like icon" src="/images/like.png" />
          </Link>
          <Link to="/main-minjee">
            <span className="profile">
              <img alt="profile" src="/images/profile.JPG" />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

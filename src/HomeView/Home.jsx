import React from 'react';
import './home.scss';
import {Link} from 'react-router';
import NavigationHeader from '../NavigationHeader';
import NavigationBar from '../NavigationBar';

function Home() {
  return(
    <div>
      <NavigationHeader />
      <NavigationBar />
      <div className="integrated-healthcare__arrow"></div>
      <div className="content-container">
        <div className="arrow-left"></div>
        <div className="menu-container">
          <Link to='/integrated_overview'>
            <div className="navigation-button">
              Overview
            </div>
          </Link>
          <Link to='/terminology'>
            <div className="navigation-button">
              Terminology
            </div>
          </Link>
          <Link to='/models'>
            <div className="navigation-button">
              Models
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

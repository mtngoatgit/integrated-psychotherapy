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

    <section className="content-container">
      <div className="menu-container">
        <Link to='/overview'>
          <div className="menu-item">
            Overview
            <img className="arrow-icon" src="/assets/right-arrow.png" alt="" />
          </div>
        </Link>
        <Link to='/terminology'>
          <div className="menu-item">
            Terminology
            <img className="arrow-icon" src="/assets/right-arrow.png" alt="" />
          </div>
        </Link>
        <Link to='/models'>
          <div className="menu-item">
            Models
            <img className="arrow-icon" src="/assets/right-arrow.png" alt="" />
          </div>
        </Link>
      </div>
    </section>
    </div>
  );
}

export default Home;

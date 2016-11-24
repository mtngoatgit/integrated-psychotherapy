import React from 'react';
import './home.scss'
import {Link} from 'react-router';

function Home() {
  return(
    <div>
    <section className="home__header">
        <div className="home__logo">
          <img className="home__icon" src="/assets/integrated-icon.png" alt="" />
          <div className="logo-title">
            <div className="logo-title_one">
              integrated
            </div>
            <div className="logo-title_two">
              Healthcare
              <span>TM</span>
            </div>
          </div>
        </div>
        <div className="home__search-icon">
          <i className="fa fa-search fa-2x" aria-hidden="true"></i>
        </div>
    </section>

    <section className="home-nav__bar">
      <div className="home-nav__item">
        <div className="home-nav__item-interior">
          <div className="home-nav__icon-container">
            <img className="home-nav__icon" src="/assets/suitcase.png" alt="suitcase" />
          </div>
          <div className="home-nav__title">
            Integrated Healthcare
          </div>
        </div>
      </div>

      <div className="home-nav__spacer"></div>

      <Link to='/diagnosis'>
        <div className="home-nav__item">
          <div className="home-nav__item-interior">
            <div className="home-nav__icon-container">
              <img className="home-nav__icon" src="/assets/brain-heart.png" alt="brain-heart" />
            </div>
            <div className="home-nav__title">
              Diagnoses
            </div>
          </div>
        </div>
      </Link>

      <div className="home-nav__spacer"></div>

      <Link to='/screening_mood'>
        <div className="home-nav__item">
          <div className="home-nav__item-interior">
            <div className="home-nav__icon-container">
              <img className="home-nav__icon" src="/assets/clipboard.png" alt="clipboard" />
            </div>
            <div className="home-nav__title">
              Screening Measures
            </div>
          </div>
        </div>
      </Link>

      <div className="home-nav__spacer"></div>

      <Link to='/behavioral_interventions'>
        <div className="home-nav__item">
          <div className="home-nav__item-interior">
            <div className="home-nav__icon-container">
              <img className="home-nav__icon" src="/assets/puzzle.png" alt="bust" />
            </div>
            <div className="home-nav__title">
              Behavioral Interventions
            </div>
          </div>
        </div>
      </Link>
    </section>

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

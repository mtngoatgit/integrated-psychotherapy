import React from 'react';
import { Link } from 'react-router';
import './navigation-bar.scss';

function NavigationBar() {
  return (
    <div className="home-nav__bar">
      <Link to='/'>
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
      </Link>

      <div className="home-nav__spacer"></div>

      <Link to='/diagnosis_navigation'>
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

      <Link to='/screening_navigation'>
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

      <Link to='/interventions_navigation'>
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
    </div>
  );
}

export default NavigationBar;

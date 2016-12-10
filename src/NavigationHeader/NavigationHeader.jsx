import React from 'react';
import './navigation-header.scss';

function NavigationHeader() {
  return (
    <div className="home__header">
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
    </div>
  );
}

export default NavigationHeader

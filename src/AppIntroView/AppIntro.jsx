import React from 'react';
import { Link } from 'react-router';
import './app-intro.scss';

function AppIntro () {
  return(
    <div className="app-intro__main">
      <div className="app-intro__inner">
        <div className="app-intro__logo">
        <Link to='/'>
          <img className="app-intro__icon" src="/assets/integrated-icon.png" alt="" />
        </Link>
        <div className="app-intro__trademark">
          <div className="app-intro__trademark-top">
            integrated
          </div>
          <div className="app-intro__trademark-bottom">
            Healthcare
            <span>TM</span>
          </div>
        </div>
        </div>
        <div className="app-intro__body">
          <p>Integrated Healthcare v 1.0 is a learning tool developed
          for mental health clinicians to obtain information essential
          to practice in adult integrated medical or behavioral healthcare
          settings.</p>
        </div>
      </div>
    </div>
  );
}

export default AppIntro;

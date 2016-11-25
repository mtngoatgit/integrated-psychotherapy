import React from 'react';
import { Link, browserHistory } from 'react-router';
import './not-found.scss';
import Logo from './integrated-icon.png';

function NotFoundView() {
  return (
    <div className="NotFoundView">
      <div className="NotFound__inner">
        <div className="NotFound-title-container">
          <div className="NotFound-title-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="NotFound-title-main">
            Hi. Sorry.
          </div>
          <div className="NotFound-title-sub">
            We were unable to find the page you were looking for.
            Please choose from the links below.
          </div>
          <div className="NotFound-button-container">
          <div>
            <button className="navigation" onClick={browserHistory.goBack}>
              Go Back
            </button>
            <Link to="/intro">
              <div className="navigation">App Intro</div>
            </Link>
            <Link to="/screening_mood">
              <div className="navigation">Screening Measures</div>
            </Link>
            <Link to="/diagnosis">
              <div className="navigation">Diagnosis</div>
            </Link>
            <Link to="/problem_solving">
              <div className="navigation">Problem Solving</div>
            </Link>
            <Link to="/">
              <div className="navigation">Home</div>
            </Link>
          </div>
          </div>
          <div className="NotFound-error-message">
            Page Error: 404
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundView;

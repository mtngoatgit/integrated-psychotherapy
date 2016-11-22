import React from 'react';
import { browserHistory } from 'react-router';
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
            Click the button below to go back.
          </div>
          <div className="NotFound-button-container">
              <button onClick={browserHistory.goBack}>
                Go Back
              </button>
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

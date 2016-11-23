import React from 'react';
import {Link} from 'react-router';
import './side-bar.scss';

function SideBar() {
  return (
    <div>
      <section className="nav-bar">
        <Link to='/' >
          <div className="nav-item">
            <div className="nav-item-interior">
              <div className="nav-icon-container">
                <img className="nav-icon" src="/assets/suitcase.png" alt="suitcase" />
              </div>
            </div>
          </div>
        </Link>

        <div className="nav-spacer"></div>

        <Link to='/diagnosis'>
          <div className="nav-item">
            <div className="nav-item-interior">
              <div className="nav-icon-container">
                <img className="nav-icon" src="/assets/brain-heart.png" alt="brain-heart" />
              </div>
            </div>
          </div>
        </Link>

        <div className="nav-spacer"></div>

        <Link to='/screening_mood'>
          <div className="nav-item">
            <div className="nav-item-interior">
              <div className="nav-icon-container">
                <img className="nav-icon" src="/assets/clipboard.png" alt="clipboard" />
              </div>
            </div>
          </div>
        </Link>

        <div className="nav-spacer"></div>

        <Link to='/behavioral_interventions'>
          <div className="nav-item">
            <div className="nav-item-interior">
              <div className="nav-icon-container">
                <img className="nav-icon" src="/assets/bust.png" alt="bust" />
              </div>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}

export default SideBar;

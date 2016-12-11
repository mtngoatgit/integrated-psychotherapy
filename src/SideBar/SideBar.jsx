import React from 'react';
import {Link} from 'react-router';
import './side-bar.scss';

function SideBar() {
  return (
    <div>
      <section className="side-nav__bar">
        <Link to='/' >
          <div className="side-nav__item">
            <div className="side-nav__item-interior">
              <div className="side-nav__icon-container">
                <img className="side-nav__icon" src="/assets/suitcase.png" alt="suitcase" />
              </div>
            </div>
          </div>
        </Link>

        <div className="side-nav__spacer"></div>

        <Link to='/diagnosis_navigation'>
          <div className="side-nav__item">
            <div className="side-nav__item-interior">
              <div className="side-nav__icon-container">
                <img className="side-nav__icon" src="/assets/brain-heart.png" alt="brain-heart" />
              </div>
            </div>
          </div>
        </Link>

        <div className="side-nav__spacer"></div>

        <Link to='/screening_navigation'>
          <div className="side-nav__item">
            <div className="side-nav__item-interior">
              <div className="side-nav__icon-container">
                <img className="side-nav__icon" src="/assets/clipboard.png" alt="clipboard" />
              </div>
            </div>
          </div>
        </Link>

        <div className="side-nav__spacer"></div>

        <Link to='/intervention_navigation'>
          <div className="side-nav__item">
            <div className="side-nav__item-interior">
              <div className="side-nav__icon-container">
                <img className="side-nav__icon" src="/assets/puzzle.png" alt="bust" />
              </div>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}

export default SideBar;

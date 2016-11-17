import React from 'react';
import './home.scss'

function Home() {
  return(
    <div>
    <section className="header">
        <div className="logo-container">
          <img className="logo" src="/assets/integrated-icon.png" alt="" />
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
        <div className="search-icon">
          <i className="fa fa-search fa-2x" aria-hidden="true"></i>
        </div>
    </section>

    <section className="nav-bar">
      <div className="nav-item">
        <div className="nav-item-interior">
          <div className="nav-icon-container">
            <img className="nav-icon" src="/assets/suitcase.png" alt="suitcase" />
          </div>
          <div className="nav-title">
            Integrated Healthcare
          </div>
        </div>
      </div>

      <div className="nav-spacer"></div>

      <div className="nav-item">
        <div className="nav-item-interior">
          <div className="nav-icon-container">
            <img className="nav-icon" src="/assets/brain-heart.png" alt="brain-heart" />
          </div>
          <div className="nav-title">
            Diagnoses
          </div>
        </div>
      </div>

      <div className="nav-spacer"></div>

      <div className="nav-item">
        <div className="nav-item-interior">
          <div className="nav-icon-container">
            <img className="nav-icon" src="/assets/clipboard.png" alt="clipboard" />
          </div>
          <div className="nav-title">
            Screening Measures
          </div>
        </div>
      </div>

      <div className="nav-spacer"></div>

      <div className="nav-item">
        <div className="nav-item-interior">
          <div className="nav-icon-container">
            <img className="nav-icon" src="/assets/bust.png" alt="bust" />
          </div>
          <div className="nav-title">
            Behavioral Interventions
          </div>
        </div>
      </div>
    </section>

    <section className="content-container">
      <div className="menu-container">
        <a href="https://www.alpinist.com" target='_blank'>
          <div className="menu-item">
            Overview
            <img className="arrow-icon" src="/assets/right-arrow.png" alt="" />
          </div>
        </a>
        <div className="menu-item">
          Terminology
          <img className="arrow-icon" src="/assets/right-arrow.png" alt="" />
        </div>
        <div className="menu-item">
          Models
          <img className="arrow-icon" src="/assets/right-arrow.png" alt="" />
        </div>
      </div>
    </section>
    </div>
  );
}

export default Home;

import React from 'react';
import { Link, browserHistory } from 'react-router';
import './models.scss';
import SideBar from '../SideBar';

function Header () {
  return(
    <div className="header">
      <div className="back-arrow-parent">
        <button onClick={browserHistory.goBack}>
          <img className="back-arrow" src="/assets/back-arrow.png" alt="" />
        </button>
      </div>
      <div className="header__title">Models</div>
      <div className="search-icon">
        <i className="fa fa-search fa-2x" aria-hidden="true"></i>
      </div>
    </div>
  );
}

function MainBody () {
  return(
    <div className="main__body">
      <div className="box">
        <div className="box__title">I.M.P.A.C.T.</div>
        <div className="box__body">
          The Improving Mood Promoting Access to Collaborative Treatment
          is an integrated primary care model. A depression clinical
          specialist provides evaluations, stepped care, treatment sessions,
          and case management as a part of a primary care team.
        </div>
      </div>
      <div className="box">
        <div className="box__title">Model Specifications</div>
        <div className="box__body">
          I.M.P.A.C.T. addresses depression in older adults which i
          mpacts 5-10% of primary care patients and results in loss of
          functioning, poor quality of life, mortality, and increased
          healthcare costs.
        </div>
        <div className="dark-box__container">
          <div className="dark-narrow-box">
            <div className="dark-box__header" style={{lineHeight: 2}}>Diagnoses</div>
            <div className="dark-box__content">
              <div className="dark-box__link">Major Depression</div>
            </div>
          </div>
          <div className="dark-narrow-box">
            <div className="dark-box__header">Screening Measures</div>
            <div className="dark-box__content">
              <div className="dark-box__link">PHQ2</div>
              <div className="dark-box__link">PHQ9</div>
              <div className="dark-box__link">SCL20</div>
            </div>
          </div>
          <div className="dark-narrow-box">
            <div className="dark-box__header">Behavioral Interventions</div>
            <div className="dark-box__content">
              <div className="dark-box__link">Problem Solving Treatment</div>
              <div className="dark-box__link">Stepped Care</div>
              <div className="dark-box__link">Case Management</div>
            </div>
          </div>
        </div>
      </div>
      <div className="ih-button__special-container">
        <div className="ih-button__special-a">All Diagnoses</div>
        <div className="ih-button__special-b">All Screenings</div>
        <div className="ih-button__special-a">All Interventions</div>
      </div>
    </div>
  );
}

function Models() {
  return (
    <div className="">
      <Header />
      <SideBar />
      <MainBody />
    </div>
  );
}

export default Models;

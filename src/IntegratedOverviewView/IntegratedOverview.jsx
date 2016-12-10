import React from 'react';
import { browserHistory }from 'react-router';
import './integrated-overview.scss';
import SideBar from '../SideBar';

function Header () {
  return(
    <div className="header">
      <div className="back-arrow-parent">
        <button onClick={browserHistory.goBack}>
          <img className="back-arrow" src="/assets/back-arrow.png" alt="" />
        </button>
      </div>
      <div className="header__title">Overview</div>
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
        <div className="box__title">Integrated Healthcare</div>
        <div className="box__body">
          Integrated care is a team-based approach to healthcare which
          addresses both medical and behavioral health services in a single
          location, so that patients get the care they need, when they need it,
          in ways that are user-friendly.
        </div>
      </div>
      <div className="box">
        <div className="box__title">Characteristics of Integrated Care Systems</div>
        <div className="box__bullet-wide"> Team Based</div>
        <div className="box__bullet-wide"> Co-located providers</div>
        <div className="box__bullet-wide"> Evidence-based interventions</div>
        <div className="box__bullet-wide"> Medical and behavioral health screening</div>
        <div className="box__bullet-wide"> Single treatment plan</div>
        <div className="box__bullet-wide"> Seemless response to all Healthcare needs</div>
        <div className="box__bullet-wide"> Measurement-based practice evaluations</div>
      </div>
      <div className="box">
        <div className="box__title" style={{marginBottom:0}}>Characteristics of</div>
        <div className="box__title">Behavioral Health Sessions</div>
        <div className="sessions">
          <div className="primary-care__box">
            <div className="component__title-sub">Integrated Primary Care:</div>
            <div className="box__bullet-wide">Focused care</div>
            <div className="box__bullet-wide">Warm hand-offs</div>
            <div className="box__bullet-wide">15-30 minute treament sessions</div>
            <div className="box__bullet-wide">Stepped Care</div>
            <div className="box__bullet-wide">Medical exam room sessions</div>
            <div className="box__bullet-wide">8-12 sessions per day</div>
            <div className="box__bullet-wide">Brief treament (4-6 sessions)</div>
          </div>
          <div className="behavioral-health__box">
            <div className="component__title-sub">Integrated Behavioral Health:</div>
            <div className="box__bullet-wide">45-60 minute therapy sessions</div>
            <div className="box__bullet-wide">Stepped Care</div>
            <div className="box__bullet-wide">7-8 sessions per day</div>
            <div className="box__bullet-wide">Long Term treatment</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IntegratedOverview() {
  return (
    <div className="">
      <Header />
      <SideBar />
      <MainBody />
    </div>
  );
}

export default IntegratedOverview

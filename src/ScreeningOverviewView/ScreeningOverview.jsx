import React from 'react';
import { browserHistory }from 'react-router';
import './screening-overview.scss';
import SideBar from '../SideBar';

function Header () {
  return(
    <div className="header">
      <div className="back-arrow-parent">
        <button onClick={browserHistory.goBack}>
          <img className="back-arrow" src="/assets/back-arrow.png" alt="" />
        </button>
      </div>
      <div className="header__title">Screening Overview</div>
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
        <div className="box__title">Screening</div>
        <div className="box__body">
          Screening is the use of biological or self-report measures to identify
          individuals with medical/psychiactric problems or risks of developing
          these difficulties.
        </div>
      </div>
      <div className="box">
        <div className="box__title">Screening Guidelines</div>
        <div className="box__bullet-wide"> The condition is a significant problem impacting the quality of life or health of individuals in the population.
</div>
        <div className="box__bullet-wide"> There are acceptable interventions for individuals who screen positive.</div>
        <div className="box__bullet-wide"> Early identification and interventions lead to better outcomes</div>
        <div className="box__bullet-wide"> A suitable screening test is available- one with high sensitivity/specificity.
          <div className="box__bullet-wide"> Sensitivity- the ability of the test to identify individuals with
            the condition.</div>
          <div className="box__bullet-wide"> Specificity- the ability of the test to correctly exclude
            individuals without the condition. </div>
        </div>
      </div>
      <div className="box">
        <div className="box__title">Use of Screening Measures</div>
        <div className="box__bullet-wide">Detect health problems or risk factors at an early stage.</div>
        <div className="box__bullet-wide">Measure the ongoing health status of problems and risk factors.</div>
      </div>
    </div>
  );
}

function ScreeningOverview() {
  return (
    <div className="">
      <Header />
      <SideBar />
      <MainBody />
    </div>
  );
}

export default ScreeningOverview

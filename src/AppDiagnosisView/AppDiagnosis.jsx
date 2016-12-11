import React from 'react';
import Collapsible from 'react-collapsible';
import { browserHistory, Link }from 'react-router';
import SideBar from '../SideBar';
import './app-diagnosis.scss';

function Header () {
  return(
    <div className="header">
      <div className="back-arrow-parent">
        <button onClick={browserHistory.goBack}>
          <img className="back-arrow" src="/assets/back-arrow.png" alt="" />
        </button>
      </div>
      <div className="header__title">Diagnosis</div>
      <div className="search-icon">
        <i className="fa fa-search fa-2x" aria-hidden="true"></i>
      </div>
    </div>
  );
}

function ViewOverview() {
  return(
    <div className="view__overview">
      <div className="view__overview-title">
         **Diagnosis Name
      </div>
      <div className="view__overview-text">
        Tumblr mixtape banjo sriracha tote bag 90's. Waistcoat dreamcatcher
        succulents unicorn cred, try-hard put a bird on it hella photo booth
        crucifix beard. Try-hard cliche salvia plaid, mumblecore tote bag
        coloring book literally street art pabst post-ironic humblebrag tofu.
        Direct trade try-hard kickstarter enamel pin pork belly, aesthetic 90's
        hammock. Schlitz intelligentsia green juice, put a bird on it offal
        taxidermy subway tile you probably haven't heard of them blog mumblecore.
        Meditation sustainable +1, heirloom church-key kitsch bespoke offal tousled.
        Selfies squid lyft scenester kinfolk, ennui franzen normcore semiotics
        cardigan chartreuse shabby chic.
      </div>
    </div>
  );
}

function Symptoms() {
  return(
    <div className="box">
      <div className="box__title">Symptoms</div>
      <div className="symptom__container">
        <div className="box__bullet-narrow">These</div>
        <div className="box__bullet-narrow">will</div>
        <div className="box__bullet-narrow">be</div>
        <div className="box__bullet-narrow">populated</div>
        <div className="box__bullet-narrow">from</div>
        <div className="box__bullet-narrow">database</div>
        <div className="box__bullet-narrow">in</div>
        <div className="box__bullet-narrow">future</div>
      </div>
    </div>
  );
}

function ScreeningMeasures() {
  return(
    <div className="ih-button__container">
      <div className="ih-button__container-title">Screening Measures</div>
      <div className="ih-button">This will be populated</div>
      <div className="ih-button">from database</div>
      <div className="ih-button">eventually</div>
    </div>
  );
}

function ComorbidConditions() {
  return(
    <div className="collapsible__section">
      <div>
        <Collapsible trigger="Comorbid Conditions" transitionTime={100}>
          <div className="comorbid__center">
            <div className="comorbid__left">
              <div className="comorbid__link">Diagnosis Link</div>
              <div className="comorbid__link">Diagnosis Link</div>
              <div className="comorbid__link">Diagnosis Link</div>
              <div className="comorbid__link">Diagnosis Link</div>
              <div className="comorbid__link">Diagnosis Link</div>
            </div>
            <div className="comorbid__right">
            <div className="note-box">
              <div className="box__title">Notes</div>
            </div>
            <div className="ih-button">ALL DIAGNOSES</div>
            </div>
          </div>
        </Collapsible>
      </div>
    </div>
  );
}

function Interventions() {
  return(
    <div className="collapsible__section">
      <div >
        <Collapsible trigger="Interventions" transitionTime={100}>
          <div className="dark-box__container">
            <div className="dark-box">
              <div className="dark-box__header">Psychotherapies</div>
              <div className="dark-box__content">
                <Link to="/somewhereElse">
                  <div className="intervention__link">
                  Words
                  </div>
                </Link>
              </div>
            </div>
            <div className="dark-box">
              <div className="dark-box__header">Lifestyle Interventions</div>
              <div className="dark-box__content">
                <Link to="/somewhereElse">
                  <div className="intervention__link">
                  Words
                  </div>
                </Link>
              </div>
            </div>
            <div className="dark-box">
              <div className="dark-box__header">Medications</div>
              <div className="dark-box__content">
                <div className="intervention__content">
                Words
                </div>
              </div>
            </div>
            <div className="dark-box">
              <div className="dark-box__header">Care Management</div>
              <div className="dark-box__content">
                <div className="intervention__list">
                Words
                </div>
              </div>
            </div>
            <div className="intervention__button">
              <div className="ih-button">ALL DIAGNOSES</div>
            </div>
          </div>
        </Collapsible>
      </div>
    </div>
  );
}

function MainBody () {
  return(
    <div className="main__body">
      <ViewOverview />
      <Symptoms />
      <ScreeningMeasures />
      <ComorbidConditions />
      <Interventions />
    </div>
  );
}

function AppDiagnosis() {
  return(
    <div>
      <Header />
      <SideBar />
      <MainBody />
    </div>
  );
}

export default AppDiagnosis;

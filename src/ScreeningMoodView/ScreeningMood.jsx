import React from 'react';
import { browserHistory } from 'react-router';
import SideBar from '../SideBar';
import './screening-mood.scss';
import DonutChart from '../DonutChart';

function Header() {
  return (
  <section className="header">
  <div className="back-arrow-parent">
    <button onClick={browserHistory.goBack}>
      <img className="back-arrow" src="/assets/back-arrow.png" alt="" />
    </button>
  </div>
    <div className="header__title">
      Screening Measures
    </div>
    <div className="search-icon">
        <i className="fa fa-search fa-2x" aria-hidden="true"></i>
    </div>
  </section>
);
}

function ViewOverview(){
  return(
    <section className="box">
      <div className="box__title">
        Mood Disorders Questionnaire (MDQ)
      </div>
      <div className="box__body">
        The Mood Disorders Questionnaire is a 5 question (17 item) measure of
        the lifetime history of manic or hypomanic symptoms derived from the
        DSM IV criteria and clinical experience.
        Question 1 contains 13 “yes/no” items assessing bipolar symptoms
        with 4 additional questions assessing clustering of symptoms,
        functional impairment, family history, and previous diagnoses.
      </div>
    </section>
  )
}

function Scoring() {
  return(
    <section className="scoring__container">
      <div className="scoring__instructions">
        <div className="component__title">Administration and Scoring</div>
        <div className="component__title-sub">Administration </div>
        <p>The MDQ is a self-report measure that requires 5 minutes
        to complete.</p>
        <div className="component__title-sub">Scoring</div>
        <p>Scoring a “yes” in 7 of the 13 criteria items and a “yes” to
        questions 2 AND “Moderate” or “Severe” to question 3 results
        in a positive screen.</p>
        <div className="component__spacer"></div>
      </div>
      <div className="scoring__document">
        <img src="/assets/pdf_cheat.png" alt="" />
        {/* THIS WILL NEED TO LINK TO THE APPROPRIATE RESOURCE */}
        <div className="measure__link">View Measure</div>
      </div>
    </section>
  )
}

function GraphsPlus() {
  return(
    <div className="GraphsPlus">
      <div className="graphs">
        <div className="graphs__column">
          <div className="box__title">Sensitivity</div>
          <div className="graph__container">
            <DonutChart />
            <div className="graph__title">General Population</div>
          </div>
          <div className="graph__container">
            <DonutChart />
            <div className="graph__title">Mood Disorder Population</div>
          </div>
        </div>
        <div className="graphs__column">
          <div className="box__title">Specificity</div>
          <div className="graph__container">
            <DonutChart />
            <div className="graph__title">General Population</div>
          </div>
          <div className="graph__container">
            <DonutChart />
            <div className="graph__title">Mood Disorder Population</div>
          </div>
        </div>
      </div>
      <div className="RelatedDiagnoses">
        <div className="box__title">RelatedDiagnoses</div>
        <div className="navigation-button">**</div>
        <div className="ih-button related-diagnosis__button">General Screening Information</div>
      </div>
    </div>
  );
}

function Notes() {
  return(
    <section className="box">
      <div className="box__title">
        Notes
      </div>
      <div className="box__body">
        Chartreuse chia fashion axe, kickstarter umami pinterest vaporware
        polaroid skateboard hammock edison bulb. Lomo readymade edison bulb
        authentic. Swag viral iPhone 3 wolf moon. Meditation yuccie
        skateboard, neutra fanny pack beard hexagon. Raw denim lyft actually
        90's vape skateboard. Aesthetic echo park austin, tousled copper
        mug brooklyn woke tofu organic bespoke fanny pack drinking vinegar
        iPhone edison bulb kinfolk. Banjo tumblr brooklyn kitsch unicorn
        art party distillery, mixtape XOXO vegan forage cronut.
      </div>
    </section>
  );
}

function MainBody() {
  return(
    <section className="main__body">
        <ViewOverview />
        <Scoring />
        <GraphsPlus />
        <Notes />
    </section>
  )
}

function ScreeningMood() {
  return(
    <div>
      <Header />
      <MainBody />
      <SideBar />
    </div>
  );
}


export default ScreeningMood;

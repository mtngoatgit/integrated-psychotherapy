import React from 'react';
import { browserHistory } from 'react-router';
import SideBar from '../SideBar';
import './screening-mood.scss';

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
    <section className="view__overview">
      <div className="view__overview-title">
        Mood Disorders Questionnaire (MDQ)
      </div>
      <div className="view__overview-text">
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
        <img className="pdf" src="/assets/pdf.png" alt="pdf" />
        {/* <img className="pdf-lines" src="/assets/pdf-lines.png" alt="pdf-lines" /> */}
      </div>
    </section>
  )
}

function Graphs() {
  return(
    <div className="Graphs">

    </div>
  );
}

function RelatedDiagnoses() {
  return(
    <div className="RelatedDiagnoses">

    </div>
  );
}

function Notes() {
  return(
    <section className="view__overview">
      <div className="view__overview-title">
        Notes
      </div>
      <div className="view__overview-text">
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
        <Graphs />
        <RelatedDiagnoses />
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

import React from 'react';
import Collapsible from 'react-collapsible';
import { browserHistory }from 'react-router';
import './problem-solving.scss';
import SideBar from '../SideBar';

function ProblemSolving() {
  return (
    <div>
    <section className="header">
    <div className="back-arrow-parent">
      <button onClick={browserHistory.goBack}>
        <img className="back-arrow" src="/assets/back-arrow.png" alt="" />
      </button>
    </div>
      <div className="header__title">
        Psychotherapy
      </div>
      <div className="search-icon">
          <i className="fa fa-search fa-2x" aria-hidden="true"></i>
      </div>
    </section>

  <SideBar />

  <section className="main__body">
    <section className="view__overview">
      <div className="view__overview-title">
        Problem-solving Therapy
      </div>
      <div className="view__overview-text">
        Problem-solving therapy is a brief, structured intervention focused on
        improving an individual's ability to cope with stressful life experiences
        through reducing problems to smaller sections and identifying specific steps
        toward positive change.
      </div>
    </section>

    <section className="goals-notes-container">
      <div className="goal-component">
        <div className="component__title">
          Goals
        </div>
        <div className="goal-items component-text">
          <li>Develop an optimistic view of coping</li>
          <li>Develop an understanding of the role of emotions</li>
          <li>Develop skills to alleviate problems that interfere with psychosocial functioning</li>
        </div>
      </div>
      <div className="note-component">
        <div className="component__title">
          Notes
        </div>
        <div className="note-items component-text">
          <li>Can be combined with other CBT treatment</li>
        </div>
      </div>
    </section>

    <section className="collapsible__section">
      <div>
      <Collapsible trigger="Assessment" transitionTime={100}>
            <p>Problem solving therapy begins with an initial evaluation of
              the problem, problem orientation, problem solving style, and
              emotional reaction. Perform assessment ongoing to evaluate new information,
              changes, and/or general progress.
            </p>
          <Collapsible trigger="Perform Problem Assessment" transitionTime={100} classParentString="collapsible-sub_header">
              <p>Complete a detailed evaluation of the current problems experienced
              by the client.</p>
          </Collapsible>
          <Collapsible trigger="Identify Problem Orientation" transitionTime={100} classParentString="collapsible-sub_header">
              <p>Problem orientation is the general beliefs, attitudes and
              emotional reactions about life problems and one's ability to
              resolve them. It is either positive or negative.</p>
              <p>Positive: views problems as opportunities, believes they are solvable,
              sense of self efficacy regarding ability to cope.</p>
              <p>Negative: views problems as threats to well-being, doubts ability to
              cope, overracting emotionally when problems occur.</p>
          </Collapsible>
          <Collapsible trigger="Identify Problem Solving Style" transitionTime={100} classParentString="collapsible-sub_header">
              <p>The problem solving style describes strategies used by the individual
              when attempting to solve or cope with stressful problems</p>
              <p>Rational/Planful: Applies effective problem solving skills.</p>
              <p>Avoidant: Avoids problems, waits for problems to resolve themselves
              or others to solve the problem.</p>
              <p>Impulsive-careless: Considers few alternatives, impulsive, goes with
              the first idea that comes to mind.  </p>
          </Collapsible>
          <Collapsible trigger="Engage Client in Self-Monitoring" transitionTime={100} classParentString="collapsible-sub_header">
              <p>Encourage patients to record the problem, emotional reaction, method used
              to handle the problem, and outcomes to identify problem solving patterns.</p>
          </Collapsible>
        </Collapsible>
      </div>
    </section>

    <section className="collapsible__section">
      <div >
        <Collapsible trigger="Therapeutic Techniques/Strategies" transitionTime={100}>
            <p>Use strategies individually or in combination to address the current
              problem solving orientation/style. </p>
            <Collapsible trigger="Problem Solving Skills Training" transitionTime={100} classParentString="collapsible-sub_header">
              <p>Provide skills training on planful problem solving:
              1) select and define the problem (break down complex problems to make them manageable),
              2) generate alternatives, 3) decision-making (weigh the pros and cons of alternatives),
              4) implementing the preferred solution, 5) evaluating outcomes.</p>
            </Collapsible>
            <Collapsible trigger="Psychoeducation" transitionTime={100} classParentString="collapsible-sub_header">
              <p>Provide education on stress, emotional regulation, health and mental health problems.
              Stress can take the form of a major life event or a collection of daily events over time.
              Individuals may be more sensitive to stress and its effects due to experiences earlier in life.</p>
            </Collapsible>
            <Collapsible trigger="Emotional Regulation Training" transitionTime={100} classParentString="collapsible-sub_header">
              <p>Provide training on emotional regulation under stress by: 1) identifying unique triggers,
              2) slowing down emotional response to think more planfully (ie. counting, deep breathing, mindful meditation),
              3) identify what emotions may be telling you- anxiety (threat or danger),
              sadness (belief you have lost something important), guilt (regret), anger (blocked from getting what you want).</p>
            </Collapsible>
            <Collapsible trigger="ABC Model of Healthy Thinking" transitionTime={100} classParentString="collapsible-sub_header">
              <p>Encourage patients to record the problem, emotional reaction, method used
              to handle the problem, and outcomes to identify problem solving patterns.</p>
            </Collapsible>
            <Collapsible trigger="Positive Imagery/Visualization" transitionTime={100} classParentString="collapsible-sub_header">
              <p>Encourage patients to record the problem, emotional reaction, method used
              to handle the problem, and outcomes to identify problem solving patterns.</p>
            </Collapsible>
            <div className="collapsible-sub_header">Homework Assignments</div>
        </Collapsible>
      </div>
    </section>

    <section className="effective-container">
      <div className="component-title">Effective for the following:</div>
      <div className="effective-link-container">
        <div className="effective-link-item">
          Diabetes
          <img src="/assets/white-right-arrow.png" alt="arrow" />
        </div>
        <div className="effective-link-item">
          Generalized Anxiety Disorder
          <img src="/assets/white-right-arrow.png" alt="arrow" />
        </div>
        <div className="effective-link-item">
          Hypertension
          <img src="/assets/white-right-arrow.png" alt="arrow" />
        </div>
        <div className="effective-link-item">
          Cardiovascular Disease
          <img src="/assets/white-right-arrow.png" alt="arrow" />
        </div>
        <div className="effective-link-item">
          Major Depression
          <img src="/assets/white-right-arrow.png" alt="arrow" />
        </div>
        <div className="effective-link-item">
          Obesity
          <img src="/assets/white-right-arrow.png" alt="arrow" />
        </div>
        <div className="effective-link-item">
          Opioid Dependence
          <img src="/assets/white-right-arrow.png" alt="arrow" />
        </div>
        <div className="effective-link-item">
          PTSD
          <img src="/assets/white-right-arrow.png" alt="arrow" />
        </div>
        <div className="effective-link-item">
          Schizophrenia
          <img src="/assets/white-right-arrow.png" alt="arrow" />
        </div>
        <div className="effective-link-item">
          Stroke
          <img src="/assets/white-right-arrow.png" alt="arrow" />
        </div>
      </div>
    </section>
  </section>
  </div>
  );
}

export default ProblemSolving;

//  ------ ARROWS AND PLUSES ----------
{/* <span className="collapse-icon-plus-two">+</span>
<span className="collapse-icon-minus-two">-</span>
<img className="down-arrow down-arrow-nine" src="/assets/down-arrow.png" alt="down arrow" />
<img className="up-arrow up-arrow-nine" src="/assets/up-arrow.png" alt="up arrow" />
*/}

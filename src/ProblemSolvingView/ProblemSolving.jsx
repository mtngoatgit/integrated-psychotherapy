import React from 'react';
import Collapsible from 'react-collapsible';
import './problem-solving.scss';

function ProblemSolving() {
  return (
    <div>
    <section className="header">
      <div className="back-arrow-parent">
        <img className="back-arrow" src="/assets/back-arrow.png" alt="" />
      </div>
      <div className="header-title">
        Psychotherapy
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
      </div>
    </div>

    <div className="nav-spacer"></div>

    <div className="nav-item">
      <div className="nav-item-interior">
        <div className="nav-icon-container">
          <img className="nav-icon" src="/assets/brain-heart.png" alt="brain-heart" />
        </div>
      </div>
    </div>

    <div className="nav-spacer"></div>

    <div className="nav-item">
      <div className="nav-item-interior">
        <div className="nav-icon-container">
          <img className="nav-icon" src="/assets/clipboard.png" alt="clipboard" />
        </div>
      </div>
    </div>

    <div className="nav-spacer"></div>

    <div className="nav-item">
      <div className="nav-item-interior">
        <div className="nav-icon-container">
          <img className="nav-icon" src="/assets/bust.png" alt="bust" />
        </div>
      </div>
    </div>
  </section>

  <section className="main-body">
    <section className="problem-solve-container">
      <div className="component-title">
        Problem-solving Therapy
      </div>
      <div className="component-text">
        Problem-solving therapy is a brief, structured intervention focused on
        improving an individual's ability to cope with stressful life experiences
        through reducing problems to smaller sections and identifying specific steps
        toward positive change.
      </div>
    </section>

    <section className="goals-notes-container">
      <div className="goal-component">
        <div className="component-title">
          Goals
        </div>
        <div className="goal-items component-text">
          <li>Develop an optimistic view of coping</li>
          <li>Develop an understanding of the role of emotions</li>
          <li>Develop skills to alleviate problems that interfere with psychosocial functioning</li>
        </div>
      </div>
      <div className="note-component">
        <div className="component-title">
          Notes
        </div>
        <div className="note-items component-text">
          <li>Can be combined with other CBT treatment</li>
        </div>
      </div>
    </section>

    <section className="assessment-container">
      <ul className="Collapsible" data-collapsible="accordion">
      <Collapsible trigger="Assessment-test">

        <li>
          <div className="Collapsible-header collapsible-component-assessment">
            Assessment
            <span className="collapse-icon-plus-one">+</span>
            <span className="collapse-icon-minus-one">-</span>
          </div>
          <div className="collapsible-body component-text">
            <p>Problem solving therapy begins with an initial evaluation of
              the problem, problem orientation, problem solving style, and
              emotional reaction. Perform assessment ongoing to evaluate new information,
              changes, and/or general progress.
            </p>
        <ul className="collapsible" data-collapsible="accordion">
          <li>
            <div className="collapsible-header collapse-trigger-one">
              Perform Problem Assessment
              <img className="down-arrow down-arrow-one" src="/assets/down-arrow.png" alt="down arrow" />
              <img className="up-arrow up-arrow-one" src="/assets/up-arrow.png" alt="up arrow" />
            </div>
            <div className="collapsible-body">
              <p>Complete a detailed evaluation of the current problems experienced
              by the client.</p>
            </div>
          </li>
          <li>
            <div className="collapsible-header collapse-trigger-two">
              Identify Problem Orientation
              <img className="down-arrow down-arrow-two" src="/assets/down-arrow.png" alt="down arrow" />
              <img className="up-arrow up-arrow-two" src="/assets/up-arrow.png" alt="up arrow" />
            </div>
            <div className="collapsible-body">
              <p>Problem orientation is the general beliefs, attitudes and
              emotional reactions about life problems and one's ability to
              resolve them. It is either positive or negative.</p>
              <p>Positive: views problems as opportunities, believes they are solvable,
              sense of self efficacy regarding ability to cope.</p>
              <p>Negative: views problems as threats to well-being, doubts ability to
              cope, overracting emotionally when problems occur.</p>
            </div>
          </li>
          <li>
            <div className="collapsible-header collapse-trigger-three">
              Identify Problem Solving Style
              <img className="down-arrow down-arrow-three" src="/assets/down-arrow.png" alt="down arrow" />
              <img className="up-arrow up-arrow-three" src="/assets/up-arrow.png" alt="up arrow" />
            </div>
            <div className="collapsible-body">
              <p>The problem solving style describes strategies used by the individual
              when attempting to solve or cope with stressful problems</p>
              <p>Rational/Planful: Applies effective problem solving skills.</p>
              <p>Avoidant: Avoids problems, waits for problems to resolve themselves
              or others to solve the problem.</p>
              <p>Impulsive-careless: Considers few alternatives, impulsive, goes with
              the first idea that comes to mind.  </p>
            </div>
          </li>
          <li>
            <div className="collapsible-header collapse-trigger-four">
              Engage Client in Self-Monitoring
              <img className="down-arrow down-arrow-four" src="/assets/down-arrow.png" alt="down arrow" />
              <img className="up-arrow up-arrow-four" src="/assets/up-arrow.png" alt="up arrow" />
            </div>
            <div className="collapsible-body">
              <p>Encourage patients to record the problem, emotional reaction, method used
              to handle the problem, and outcomes to identify problem solving patterns.</p>
            </div>
          </li>
        </ul>
        </div>
        </li>
        </Collapsible>
      </ul>
    </section>

    <section className="techniques-container">
      <ul className="collapsible" data-collapsible="accordion">
        <li>
          <div className="collapsible-header collapsible-component-techniques">
            Therapeutic Techniques/Strategies
            <span className="collapse-icon-plus-two">+</span>
            <span className="collapse-icon-minus-two">-</span>
          </div>
          <div className="collapsible-body component-text">
            <p>Use strategies individually or in combination to address the current
              problem solving orientation/style. </p>
        <ul className="collapsible" data-collapsible="accordion">
          <li>
            <div className="collapsible-header collapse-trigger-five">
              Problem Solving Skills Training
              <img className="down-arrow down-arrow-five" src="/assets/down-arrow.png" alt="down arrow" />
              <img className="up-arrow up-arrow-five" src="/assets/up-arrow.png" alt="up arrow" />
            </div>
            <div className="collapsible-body">
              <p>Provide skills training on planful problem solving:
              1) select and define the problem (break down complex problems to make them manageable),
              2) generate alternatives, 3) decision-making (weigh the pros and cons of alternatives),
              4) implementing the preferred solution, 5) evaluating outcomes.</p>
            </div>
          </li>
          <li>
            <div className="collapsible-header collapse-trigger-six">
              Psychoeducation
              <img className="down-arrow down-arrow-six" src="/assets/down-arrow.png" alt="down arrow" />
              <img className="up-arrow up-arrow-six" src="/assets/up-arrow.png" alt="up arrow" />
            </div>
            <div className="collapsible-body">
              <p>Provide education on stress, emotional regulation, health and mental health problems.
              Stress can take the form of a major life event or a collection of daily events over time.
              Individuals may be more sensitive to stress and its effects due to experiences earlier in life.</p>
            </div>
          </li>
          <li>
            <div className="collapsible-header collapse-trigger-seven">
              Emotional Regulation Training
              <img className="down-arrow down-arrow-seven" src="/assets/down-arrow.png" alt="down arrow" />
              <img className="up-arrow up-arrow-seven" src="/assets/up-arrow.png" alt="up arrow" />
            </div>
            <div className="collapsible-body">
              <p>Provide training on emotional regulation under stress by: 1) identifying unique triggers,
              2) slowing down emotional response to think more planfully (ie. counting, deep breathing, mindful meditation),
              3) identify what emotions may be telling you- anxiety (threat or danger),
              sadness (belief you have lost something important), guilt (regret), anger (blocked from getting what you want).</p>
            </div>
          </li>
          <li>
            <div className="collapsible-header collapse-trigger-eight">
              ABC Model of Healthy Thinking
              <img className="down-arrow down-arrow-eight" src="/assets/down-arrow.png" alt="down arrow" />
              <img className="up-arrow up-arrow-eight" src="/assets/up-arrow.png" alt="up arrow" />
            </div>
            <div className="collapsible-body">
              <p>Encourage patients to record the problem, emotional reaction, method used
              to handle the problem, and outcomes to identify problem solving patterns.</p>
            </div>
          </li>
          <li>
            <div className="collapsible-header collapse-trigger-nine">
              Positive Imagery/Visualization
              <img className="down-arrow down-arrow-nine" src="/assets/down-arrow.png" alt="down arrow" />
              <img className="up-arrow up-arrow-nine" src="/assets/up-arrow.png" alt="up arrow" />
            </div>
            <div className="collapsible-body">
              <p>Encourage patients to record the problem, emotional reaction, method used
              to handle the problem, and outcomes to identify problem solving patterns.</p>
            </div>
          </li>
          <li>
            <div className="homework-header">Homework Assignments</div>
          </li>
        </ul>
        </div>
        </li>
      </ul>
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

import React from 'react';
import Collapsible from 'react-collapsible';
import { browserHistory }from 'react-router';
import SideBar from '../SideBar';
import './app-diagnosis.scss';

function AppDiagnosis () {
  return(
    <div>
      <section className="app-diagnosis__header">

        <div className="back-arrow-parent">
          <button onClick={browserHistory.goBack}>
            <img className="back-arrow" src="/assets/back-arrow.png" alt="" />
          </button>
        </div>

        <div className="app-diagnosis__header-title">
          Diagnosis
        </div>
        <div className="search-icon">
            <i className="fa fa-search fa-2x" aria-hidden="true"></i>
        </div>
      </section>

      <SideBar />

      <div className="main__body">
      <section className="view__overview">
        <div className="view__overview-title">
           Diagnosis Name
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
      </section>
        <div className="">

        </div>
        <div className="">

        </div>
        <div className="">

        </div>
        <section className="collapsible__section">
          <div>
            <Collapsible trigger="Comorbid Conditions" transitionTime={100}>
              <div className="">

              </div>
              <div className="">

              </div>
              <div className="">

              </div>
            </Collapsible>
          </div>
        </section>

        <section className="collapsible__section">
          <div >
            <Collapsible trigger="Interventions" transitionTime={100}>
                <div className="">

                </div>
                <div className="">

                </div>
                <div className="">

                </div>
                <div className="">

                </div>
            </Collapsible>
          </div>
        </section>

      </div>

    </div>
  );
}

export default AppDiagnosis;

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppDiagnosis from '../AppDiagnosisView';
import AppIntro from '../AppIntroView';
import DiagnosisExpanded from '../DiagnosisExpandedView';
import Home from '../HomeView';
import NotFound from '../NotFoundView';
import ProblemSolving from '../ProblemSolvingView';
import ScreeningMood from '../ScreeningMoodView';
import Terminology from '../TerminologyView';
import IntegratedOverview from '../IntegratedOverviewView';
import ScreeningOverview from '../ScreeningOverviewView';
import ScreeningNavigation from '../ScreeningNavigationView';
import DiagnosisNavigation from '../DiagnosisNavigationView';
import InterventionNavigation from '../InterventionNavigationView';

injectTapEventPlugin();

const App = React.createClass({
	render(){
		return (
			<div>
        <Router history={hashHistory}>
          <Route path="/" component={Home} />
          <Route path="/intro" component={AppIntro} />
          <Route path="/diagnosis" component={AppDiagnosis} />
          <Route path="/diagnosis_expanded" component={DiagnosisExpanded} />
          <Route path="/problem_solving" component={ProblemSolving} />
          <Route path="/screening_mood" component={ScreeningMood} />
					<Route path="/terminology" component={Terminology} />
					<Route path="/integrated_overview" component={IntegratedOverview} />
					<Route path="/screening_overview" component={ScreeningOverview} />
					<Route path="/screening_navigation" component={ScreeningNavigation} />
					<Route path="/diagnosis_navigation" component={DiagnosisNavigation} />
					<Route path="/intervention_navigation" component={InterventionNavigation} />
					<Route path="*" component={NotFound} />
        </Router>
			</div>
		)
	}
})

ReactDOM.render(<App />, document.getElementById('app'));

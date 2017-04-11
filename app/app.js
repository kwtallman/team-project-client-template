/* Empty for now. :) */
//import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, browserHistory, hasHistory, createMemoryHistory } from 'react-router';

import localizer from 'react-big-calendar/lib/localizers/globalize';
import 'react-big-calendar/lib/less/styles.less';
// Each major browser view user interface must be imported.

import Manual from './Components/manual.js';
import Home from './Components/home.js';
import AddAssignment from './Components/addAssignment.js';
import Profile from './Components/profile.js';
import Colespage from './Components/colespage.js';
import routerPage from './Components/routerpage.js';

class App extends React.Component {
  render() {
    return (
      <Router history={hasHistory|browserHistory|createMemoryHistory}>
        <Route path="/" component={routerPage}>
          <IndexRoute component = {Home} />
          <Route path = "manual" component = {Manual} />
          <Route path = "addAssignment" component = {AddAssignment} />
          <Route path = "profile" component = {Profile} />
          <Route path = "colespage" component = {Colespage} />
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
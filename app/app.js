
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

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={routerPage}>
      <IndexRoute component = {Home} />
      <Route path = "/home.html" component = {Home} />
      <Route path = "/manual.html" component = {Manual} />
      <Route path = "/AddAssignment.html" component = {AddAssignment} />
      <Route path = "/profile.html" component = {Profile} />
      <Route path = "/colespage.html" component = {Colespage} />
      <Route path = "/FirstTimeUserUploadPage.html" component = {Colespage} />
    </Route>
  </Router>,
  document.getElementById('root')
)

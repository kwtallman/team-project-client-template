/* Empty for now. :) */
//import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, hashHistory } from 'react-router'

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
      <Router history={hashHistory}>
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


/*
// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('manual') !== null) {
  ReactDOM.render(
    <Manual user={1}/>,
    document.getElementById('manual')
  );
} else if (document.getElementById('addassignment') !== null) {
  ReactDOM.render(
    <AddAssignment />,
    document.getElementById('addassignment')
  );
} else if (document.getElementById('colespage') !== null) {
  ReactDOM.render(
    //needed variable name here
    <Colespage />,
    document.getElementById('colespage')
  );
} else if (document.getElementById('home') !== null) {
  ReactDOM.render(
    <Home />,
    document.getElementById('home')
  );
} else if (document.getElementById('profile') !== null) {
  ReactDOM.render(
    <Profile user={1} />
  );
}  else if (document.getElementById('dragupload') !== null) {
  ReactDOM.render(
    <Dragupload />,
    document.getElementById('dragupload')
  );
}
*/

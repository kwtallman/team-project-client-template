/* Empty for now. :) */
//import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

import localizer from 'react-big-calendar/lib/localizers/globalize';

import 'react-big-calendar/lib/less/styles.less';
// Each major browser view user interface must be imported.

import Manual from './Components/manual.js';
import Home from './Components/home.js';
import AddAssignment from './Components/addAssignment.js';
import Profile from './Components/profile.js';
import Dragupload from './Components/dragupload.js';
import Colespage from './Components/colespage.js';

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

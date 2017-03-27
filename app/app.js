/* Empty for now. :) */
//import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.

import Manual from './Components/manual.js';
import Home from './Components/home.js';
import AddAssignment from './Components/addAssignment.js';
import Colebar from './Components/colebar.js';
import Profile from './Components/profile.js';

// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('manual') !== null) {
  ReactDOM.render(
    <Manual />,
    document.getElementById('manual')
  );
} else if (document.getElementById('calendar') !== null) {
  ReactDOM.render(
    <UI02 />,
    document.getElementById('calendar')
  );
} else if (document.getElementById('addassignment') !== null) {
  ReactDOM.render(
    <AddAssignment />,
    document.getElementById('addassignment')
  );
} else if (document.getElementById('dragupload') !== null) {
  ReactDOM.render(
    <UI03 />,
    document.getElementById('dragupload')
  );
} else if (document.getElementById('colespage') !== null) {
  ReactDOM.render(
    <UI04 />,
    document.getElementById('colespage')
  );
} else if (document.getElementById('home') !== null) {
  ReactDOM.render(
    <Home />,
    document.getElementById('home')
  );
}
else if (document.getElementById('profile') !== null) {
  ReactDOM.render(
    <Profile />,
    document.getElementById('profile')
  );
}

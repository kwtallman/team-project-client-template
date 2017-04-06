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
import Calendar from './Components/calendar.js';
import Dragupload from './Components/dragupload.js';
//needed to be imported
import Colespage from './Components/colespage.js';
import LeftSide from './Components/leftside.js';

// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('manual') !== null) {
  ReactDOM.render(
    <Manual />,
    document.getElementById('manual')
  );
} else if (document.getElementById('calendar') !== null) {
  ReactDOM.render(
    <Calendar />,
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
    <Profile />,
    document.getElementById('profile')
  );
} else if (document.getElementById('colebar') !== null) {
  ReactDOM.render(
    <Colebar />,
    document.getElementById('colebar')
  );
} else if (document.getElementById('leftside') !== null) {
  ReactDOM.render(
    <LeftSide />,
    document.getElementById('leftside')
  );
} else if (document.getElementById('dragupload') !== null) {
  ReactDom.render(
    <Dragupload />,
    document.getElementById('dragupload')
  );
}

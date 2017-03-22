/* Empty for now. :) */
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';

// Each major browser view user interface must be imported.
import UI01 from './build/js/ui-01.js';
import UI02 from './build/js/ui-02.js';
import UI03 from './build/js/ui-03.js';
import UI04 from './build/js/ui-04.js';
import UI05 from './build/js/ui-05.js';
import UI06 from './build/js/ui-06.js';

// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('addassignment') !== null) {
  ReactDOM.render(
    <UI01 />,
    document.getElementById('addassignment')
  );
} else if (document.getElementById('calendar') !== null) {
  ReactDOM.render(
    <UI02 />,
    document.getElementById('calendar')
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
    <UI05 />,
    document.getElementById('home')
  );
} else if (document.getElementById('manual') !== null) {
  ReactDOM.render(
    <UI06 />,
    document.getElementById('manual')
  );
} else if (document.getElementById('profile') !== null) {
  ReactDOM.render(
    <UI07 />,
    document.getElementById('profile')
  );
}

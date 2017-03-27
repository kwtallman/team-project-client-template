import React from 'react';
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.

import Manual from './Components/manual.js';
import Home from './Components/home.js';

// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('manual') !== null) {
  ReactDOM.render(
    <Manual />,
    document.getElementById('manual')
  );
} else if (document.getElementById('home') !== null) {
  ReactDOM.render(
    <Home />,
    document.getElementById('home')
  );
}

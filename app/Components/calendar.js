import React from 'react';
import ReactDOM from 'react-dom';
import events from '../events';
import Colebar from './Colebar.js'
import Footer from './footer.js';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer



export default class Calendar extends React.Component {
    constructor(props, context) {
      super(props, context);
    }

  render() {
    return (
     <div>
        <Colebar />
        <div style={{height: 400}}>
         <BigCalendar
            events={events}
            startAccessor={new Date(2016, 3, 1)}
            endAccessor={new Date(2017, 3, 1)}
        />
        </div>
        <Footer />
      </div>
    );
  }
}
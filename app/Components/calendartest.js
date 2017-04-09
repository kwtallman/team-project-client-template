import React from 'react';
import ReactDOM from 'react-dom';

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
         <BigCalendar
            events={[]}
        />
        </div>
    );
  }
}
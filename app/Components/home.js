import React from 'react';
import ReactDOM from 'react-dom';
import events from '../events';
import {getInitialData} from '../database.js';
import Colebar from './Colebar.js'
import Footer from './footer.js';
//import {getProfileSync} from '../server';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

var data = getInitialData();

export default class Home extends React.Component {
    constructor(props, context) {
      super(props, context);
    }

  render() {
    return (
     <div>
        <Colebar />
        <div style={{height: 400}}>
         <BigCalendar
            events={data.assignList.test.assignment}
        />

        </div>

        <Footer />
      </div>
    );
  }
}

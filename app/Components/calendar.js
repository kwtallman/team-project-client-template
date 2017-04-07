import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Colebar from './colebar.js'

BigCalendar.momentLocalizer(moment);

export default class Calendar extends React.Component {
	
  render() {
    return (
      <div>
        <Colebar />
        hello
        <BigCalendar
          events = {myEventsList}
          startAccessor='startDate'
          endAccessor='endDate'
          />
      	
		</div>
		)
	}
}

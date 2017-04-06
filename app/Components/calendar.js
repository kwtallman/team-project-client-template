import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Colebar from './colebar.js'

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

export default class Calendar extends React.Component {
	
  render() {
    return (
      <div>
      <Colebar />
      	Hello world

      	<BigCalendar />
      	
		</div>
		)
	}
}

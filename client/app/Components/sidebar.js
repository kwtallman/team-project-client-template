import React from 'react';
import ResetDatabase from '../database.js';

export default class LeftSide extends React.Component {
  render() {
    return (
      <div className="col-md-1">
      <div id="root"></div>
      <div id="db-reset"></div>
        <ul className="nav nav-pills nav-stacked sidebar">
          <br />
          <li role="presentation">Profile</li>
          <li role="presentation"><a href="profile.html"><span className="glyphicon glyphicon-user"></span> Edit</a></li>
          <li role="presentation">Assignments</li>
          <li role="presentation"><a href="home.html"><span className="glyphicon glyphicon-calendar"></span> Calendar</a></li>
          <li role="presentation"><a href="#"><span className="glyphicon glyphicon-plus"></span> New</a></li>
          <li role="presentation">Entry</li>
          <li role="presentation"><a href="manual.html"><span className="glyphicon glyphicon-plus"></span> Manual</a></li>
          <li role="presentation"><a href="AddAssignment.html"><span className="glyphicon glyphicon-signal"></span> Automatic</a></li>
          <li role="presentation">DEBUG</li>
          <li role="presentation">{/*<a href="#"><span className="glyphicon glyphicon-repeat"></span> Reset Database</a>*/}
            <ResetDatabase />
          </li>

        </ul>
      </div>
    )
  }
}

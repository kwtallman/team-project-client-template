import React from 'react';

export default class LeftSide extends React.Component {
  render() {
    return (
      <div className="col-md-1">
        <ul className="nav nav-pills nav-stacked sidebar">
          <br />
          <li role="presentation">Profile</li>
          <li role="presentation"><a href="#"><span className="glyphicon glyphicon-user"></span> Edit</a></li>
          <li role="presentation">Assignments</li>
          <li role="presentation"><a href="#"><span className="glyphicon glyphicon-calendar"></span> Calendar</a></li>
          <li role="presentation" className="active"><a href="#"><span className="glyphicon glyphicon-list-alt"></span> List</a></li>
          <li role="presentation"><a href="#"><span className="glyphicon glyphicon-plus"></span> New</a></li>
          <li role="presentation">Entry</li>
          <li role="presentation"><a href="#"><span className="glyphicon glyphicon-plus"></span> Manual</a></li>
          <li role="presentation"><a href="#"><span className="glyphicon glyphicon-signal"></span> Automatic</a></li>
          <li role="presentation">DEBUG</li>
          <li role="presentation" id="db-reset"></li>
        </ul>
      </div>
    )
  }
}

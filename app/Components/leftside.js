import React from 'react';

export default class LeftSide extends React.Component {
  render() {
    return (
      <div className="col-md-2 fb-left-sidebar">
        <ul className="nav nav-pills nav-stacked">
          <li role="presentation">Profile</li>
          <li role="presentation"><a href="#"><span className="glyphicon glyphicon-user"></span> Edit</a></li>
          <li role="presentation">Assignments/ Events</li>
          <li role="presentation"><a href="#"><span className="glyphicon glyphicon-calendar"></span> Calendar</a></li>
          <li role="presentation" className="active"><a href="#"><span className="glyphicon glyphicon-list-alt"></span> List</a></li>
          <li role="presentation"><a href="#"><span className="glyphicon glyphicon-plus"></span> Add New</a></li>
          <li role="presentation">Create</li>
          <li role="presentation"><a href="#"><span className="glyphicon glyphicon-plus"></span> Manual Entry</a></li>
          <li role="presentation"><a href="#"><span className="glyphicon glyphicon-signal"></span> Automatic Entry</a></li>
        </ul>
      </div>
    )
  }
}

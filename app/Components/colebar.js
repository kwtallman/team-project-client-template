import React from 'react';

export default class Colebar extends React.Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-fixed-top navbar-default">
        <div className="container">
          <div className="row">
            <div className="col-md-3">

              <div className="navbar-icons left-icons">
                <a className="navbar-brand" href="home.html">
                  <span className="glyphicon glyphicon-home"></span>
                  <a className="navbar-brand" href="calendar.html">
                    <span className="glyphicon glyphicon-calendar"></span>
                    <a className="navbar-brand" href="home.html">
                      <span className="glyphicon glyphicon-list-alt"></span>
                    </a>
                  </a>
                </a>
              </div>
            </div>
            <div className="col-md-6">

              <div className="grumber-text">
                <h3>Grumber</h3>
              </div>
            </div>
            <div className="col-md-3">

              <div className="navbar-icons right-icons">
                <a className="navbar-brand dropdown-toggle" data-toggle="dropdown" href="#">
                  <span className="glyphicon glyphicon-tasks"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="profile.html">Profile</a></li>
                    <li><a href="AddAssignment.html">Add Assignment</a></li>
                    <li><a href="manual.html">Manual Entry</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        </div>
    )
  }
}

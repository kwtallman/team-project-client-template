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
                  <span className="grumber-text">
                    Grumber
                  </span>
                </a>
              </div>
            </div>
            <div className="col-md-6"></div>
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

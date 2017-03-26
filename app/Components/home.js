import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <nav className="second-navbar navbar">
          <div className="container">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <form className="navbar-form navbar-left" role="search">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search Grumber Events">
                  <span className="input-group-btn">
                    <button type="submit" className="btn btn-default">
                      <span className="glyphicon glyphicon-search"></span>
                    </button>
                  </span>
                </div>
              </form>

            <div className="nav navbar-nav navbar-right">

              <div className="btn-toolbar" role="toolbar">

                <div className="btn-group" role="group">
                  <a href="calendar.html" type="button" className="btn btn-default navbar-btn">
                  Calendar View
                  </a>
                </div>

                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-default dropdown-toggle navbar-btn"
                        data-toggle="dropdown">
                      Filter
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu">
                    Filter:
                    <li><a href="#">By Due Date</a></li>
                    <li><a href="#">By Class</a></li>
                    <li><a href="#">By Type (Event, Assignment, or Appointment)</a></li>
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

import React from 'react';

export default class Colespage extends React.Component {
  render() {
    return (
      <div>
        <div className="btn-group-vertical" role="group">
          <h3> Welcome to Grumber! </h3>
            <p> Click each button to automatically upload your assignment information </p> <br />
                  <button type="button" className="btn btn-danger">Moodle</button><br />
                  <button type="button" className="btn btn-default">Blackboard</button><br />
                  <button type="button" className="btn btn-default">OWL</button><br />
                  <button type="button" className="btn btn-default">Gradescope</button> <br>
                  <p> Manually upload all other assignments here </p><br />
                  <button type="button" onclick="window.location='manual.html'" className="btn btn-default">Manual Upload</button>
        </div>
      </div>
      )
    }
  }

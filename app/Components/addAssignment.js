import React from 'react';
import Colebar from './colebar';
import Sidebar from './sidebar';
import Footer from './footer.js';

export default class AddAssignment extends React.Component {
  render() {
    return (
<div>
  <Sidebar />
  <Colebar />
  <Footer />
      <div className="container">
        <div className="row">
          <div className="col-md-4"> </div>
          <div className="col-md-4">
            <div className="btn-group-vertical" role="group">
              <h3> New Assignments? </h3>
              <p> Click any button to automatically update your assignment information </p> <br/>
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-2">
                  <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-repeat"></span></button><br/>
                  <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-repeat"></span></button><br/>
                  <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-repeat"></span></button><br/>
                  <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-repeat"></span></button><br/>
                </div>
                <div className="col-md-7">
                  <p className="assignments">Moodle</p>
                  <p className="assignments">Blackboard</p>
                  <p className="assignments">OWL</p>
                  <p className="assignments">Gradescope</p>
                </div>
              </div>
              <p> Manually upload all other assignments here </p><br/>
              <button type="button" onClick="window.location='manual.html'" className="btn btn-default">Manual Upload</button>
                <br/>
                <button type="button" onClick="window.location='dragupload.html'" className="btn btn-default">Upload File</button>
          </div>
          </div>
        </div>
      </div>
</div>
    )
  }
}

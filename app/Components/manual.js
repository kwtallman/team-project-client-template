import React from 'react';
//import {Link} from 'react-router';
import Sidebar from './sidebar.js';
import Colebar from './colebar.js';
import Footer from './footer.js';
import NewAssign from '../server.js'

import {Link} from 'react-router';

export default class Manual extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      assignment= []
    };
  }

  //componentDidMount() {
    //this.refresh();
  //}

  handleSubmitClick(clickEvent) {
  // Stop the event from propagating up the DOM tree, since we handle it here.
  // Also prevents the link click from causing the page to scroll to the top.
  clickEvent.preventDefault();
  // 0 represents the 'main mouse button' -- typically a left click
  // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
  if (clickEvent.button === 0) {
    // Callback function for both the like and unlike cases.
    var callbackFunction = (addAssign) => {
      // setState will overwrite the 'likeCounter' field on the current
      // state, and will keep the other fields in-tact.
      // This is called a shallow merge:
      // https://facebook.github.io/react/docs/component-api.html#setstate
      this.setState({assignment: addAssign});
    };

    NewAssign(this.state._id, 1, callbackFunction);

  }
}

  render() {
    return (
      <div>
        <Sidebar />
        <Colebar />
        <Footer />
      <div className="container">
        <p className="headtext">Manual Deadline Entry</p>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form method="post">
              <div className="form-group row">
                <label htmlFor="classinput" className="col-2 col-form-label">Class</label>
                <div className="col-10">
                  <input className="form-control" type="text" value="Ex: CS326" id="classinput" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="typeinput">Deadline Type</label>
                <select className="form-control" id="typeinput">
                  <option>Assignment</option>
                  <option>Event</option>
                </select>
              </div>
              <div className="form-group row">
                <label htmlFor="assigninput" className="col-2 col-form-label">Identifier</label>
                <div className="col-10">
                  <input className="form-control" type="text" value="Ex: UI Mockup" id="assigninput" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="dateinput" className="col-2 col-form-label">Deadline Date</label>
                <div className="col-10">
                  <input className="form-control" type="date" value="2017-02-25" id="dateinput" />
                </div>
              </div>
              <div className="container" role="main">

                <div className="boxShape">
                  <input type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
                  <label htmlFor="file" className="textAlign"><strong>Choose a file</strong></label>
                  <br />
                  <button type="submit" className="btn btn-default">Upload</button>
                    <div className="box__uploading">Uploading&hellip;</div>
                    <div className="box__success">Done! <a className="box__restart" role="button">Upload more?</a></div>
                    <div className="box__error">Error! <span></span>. <a className="box__restart" role="button">Try again!</a></div>
                </div>


            </div>

              <div className="form-group row">
                <label htmlFor="timeinput" className="col-2 col-form-label">Deadline Time</label>
                <div className="col-10">
                  <input className="form-control" type="time" value="01:30:00" id="timeinput" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="descinput">Description</label>
                <textarea className="form-control" id="descinput" rows="3">Ex: Need to create UI Mockups.</textarea>
              </div>
              <div className="form-group row">
                <label htmlFor="colorinput" className="col-2 col-form-label">Assignment Color</label>
                <div className="col-10">
                  <input className="form-control" type="color" value="Ex: CS326" id="colorinput" />
                </div>
              </div>
                <button type="submit" className= "btn btn-primary center-block" onClick={(e) => this.handleSubmitClick(e)}>Submit</button>
              <p className="padding"> </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

import React from 'react';
import LeftSide from './leftside.js';

export default class Profile extends React.Component{

	render() {
		return(
			<div>

				<LeftSide />
			    <div className="container">

			      <div className="row">

			        <div className="col-md-6 left-side-info">
			          <p>First Last</p>

			          <p>username</p>

			          <p>email@umass.edu</p>

			          <p>Change password:</p>

			          <div className="input-customize">
			            <input type="password" className="form-control" name="old_password" placeholder="Type old password" />
			          </div>
			          <div className="input-customize">
			            <input type="password" className="form-control" name="new_password" placeholder="Type new password" />
			          </div>
			          <div className="input-customize">
			            <input type="password" className="form-control" name="confirm_password" placeholder="Confirm new password" />
			          </div>
			          <br />
			          <button id="btn-signup" type="button" className="btn btn-success">Submit</button>

			        </div>

			        <div className="col-md-6 right-side-info">
			          <img src="img/profilepic.jpg" />
			        </div>
			      </div>
			    </div>
		    </div>
		)
	}
}

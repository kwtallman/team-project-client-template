import React from 'react';
import Sidebar from './sidebar.js';
import Footer from './footer.js';
import Colebar from './colebar.js';
import {getProfData} from '../server.js';
import {getInitialData} from '../database.js'

var data = getInitialData();

export default class Profile extends React.Component{
	constructor(props) {
    super(props);
    this.state = {
      contents: {}
    };
  }

	refresh() {
	getProfData(this.props.user, (userData) => {
		this.setState(userData);
	});
}

componentDidMount() {
	this.refresh();
}

	render() {
		return(
			<div>
				<Sidebar />
        <Colebar />
        <Footer />
				<div className="container">
					<div className="row">
						<div className="col-md-6 left-side-info">
							<p>{data.users.firstUser.contents.first}</p>
							<p>{data.users.firstUser.contents.username}</p>
							<p>{data.users.firstUser.contents.email}</p>
								<p>Change password:</p>
								<div className="input-customize">
									<input type="password" className="form-control" name="old_password" placeholder="Type old password" />
								</div>
								<br />
								<div className="input-customize">
									<input type="password" className="form-control" name="new_password" placeholder="Type new password" />
								</div>
								<br />
								<div className="input-customize">
									<input type="password" className="form-control" name="confirm_password" placeholder="Confirm new password" />
								</div>
								<br />
								<button id="btn-signup" type="button" className="btn btn-success">Submit</button>
							</div>
							<div className="col-md-5 right-side-info">
								<img src="img/profilepic.jpg" />
							</div>
						</div>
					</div>
				</div>
		)
	}
}

import React, { Component } from "react";
import "../App2.css";

import { Route, NavLink, HashRouter } from "react-router-dom";

import Dashboard from "../Dashboard/Dashboard";
import HomePage from "../HomePage/HomePage";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Secret from "../Secret/Secret";
import withAuth from "../withAuth"; //TODO move this
import axios from "axios";

class Main extends Component {


	constructor() {
		super();
	
		this.state = {
		  loggedInStatus: "NOT_LOGGED_IN",
		  user: {}
		};
	
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	  }


	checkLoginStatus() {
        const token = localStorage.getItem('jwt');
		axios.get("http://104.236.19.163:3001/users/authentication", { 
            headers: {
                'Authorization': `Bearer ${token}`
			}
		 }).then(res => {
			// this.setState({
			// 	loggedInStatus: "LOGGED_IN",
			// 	user: res.data.username
			// });
			console.log("logged in? ", res);
			if (res.status === 200 && this.state.loggedInStatus === "NOT_LOGGED_IN") {
				this.setState({
					loggedInStatus: "LOGGED_IN",
					user: res.data.username
				});
			} else if (!res.status === 200 & (this.state.loggedInStatus === "LOGGED_IN")) {
				this.setState({
					loggedInStatus: "NOT_LOGGED_IN",
					user: {}
				});
			}
		}).catch(error => {
			console.log("check login error", error);
		});
	}

	componentDidMount() {
		this.checkLoginStatus();
	}

	handleLogout() {
		this.setState({
		  loggedInStatus: "NOT_LOGGED_IN",
		  user: {}
		});
	  }
	
	  handleLogin(data) {
		this.setState({
		  loggedInStatus: "LOGGED_IN",
		  user: data.username
		});
	  }
	
	render() {
		return (
			<HashRouter>
				<div className="navbar" aria-label="Navigation bar">
					<br />
					<ul>
						<li>
							<NavLink exact to="/">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/dashboard">Dashboard</NavLink>
						</li>
						<li>
							<a href="">Configure budgets</a>
						</li>
						<li>
							<NavLink to="/secret">Secret</NavLink>
						</li>
						<li className="dropdown">
							<NavLink to="/login">Log in</NavLink>
							<div className="dropdown-content">
								<NavLink to="/register">Sign up</NavLink>
							</div>
						</li>
					</ul>
				</div>

				<div>Logged in status (new): {this.state.loggedInStatus}</div>
				<div id="wrap">
					<div className="block2">
						<div className="container2">

							<div className="content">
								<Route exact path="/" component={HomePage} />
								<Route path="/dashboard" component={Dashboard} />
								{/* <Route path="/login" component={Login} /> */}
								<Route path="/login" render={props => (<Login {...props} handleLogin={this.handleLogin} handleLogout={this.handleLougout} loggedInStatus={this.state.loggedInStatus} />)} />
								<Route path="/register" component={Register} />
								<Route path="/secret" component={withAuth(Secret)} />
							</div>

						</div>
					</div>
				</div>

				<div id="footer" align="center">
					<footer className="footer"><br />
						<div className="container text-center py-3">
							<span className="text-muted">Copyright &copy; <a href="https://github.com/corey-schneider">Corey Schneider</a> - Student at <a href="https://uncc.edu">UNC Charlotte</a>
							<br />
							</span>
						</div>
					</footer>
				</div>
				

			</HashRouter>
		);
	}
}

export default Main;

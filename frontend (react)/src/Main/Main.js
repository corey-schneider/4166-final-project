import React, { Component } from "react";
import "../App2.css";

import { Route, NavLink, HashRouter } from "react-router-dom";

import Dashboard from "../Dashboard/Dashboard";
import HomePage from "../HomePage/HomePage";
import Login from "../Login/Login";
import Register from "../Register/Register";

class Main extends Component {
	
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
							<a href="">[empty]</a>
						</li>
						<li className="dropdown">
							<NavLink to="/login">Log in</NavLink>
							<div className="dropdown-content">
								<NavLink to="/register">Sign up</NavLink>
							</div>
						</li>
					</ul>
				</div>

				<div id="wrap">
					<div className="block2">
						<div className="container2">

							<div className="content">
								<Route exact path="/" component={HomePage} />
								<Route path="/dashboard" component={Dashboard} />
								<Route path="/login" component={Login} />
								<Route path="/register" component={Register} />
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

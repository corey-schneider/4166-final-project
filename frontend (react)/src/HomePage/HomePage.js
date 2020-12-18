import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import "../App2.css";

class HomePage extends Component {
	render() {
		return (
			<>
				<h1 align="center">Welcome to the Personal Budget application!</h1>

				<p>Welcome to the application. Feel free to use the navigation bar above to explore the site.
					You are able to add custom budgets to track how much money you can freely spend each month. Enjoy!</p>
					<br/>
				<h4>This application was created using <a href="https://reactjs.org/" rel="nofollow">React</a>, <a href="https://nodejs.org/en/" rel="nofollow">Node.js</a>, and <a href="https://www.mongodb.com/" rel="nofollow">MongoDB</a></h4>
			</>
		);
	}
}

export default HomePage;

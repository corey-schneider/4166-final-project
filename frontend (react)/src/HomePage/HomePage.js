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
			</>
		);
	}
}

export default HomePage;

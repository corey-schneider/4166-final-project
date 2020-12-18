import React, { Component } from "react";
import "../App2.css";
import axios from "axios";
// import Popup from 'react-popup';
// import ReactDOM from 'react-dom';

let URL = "http://localhost:3001"; // TODO change this when put on live web

class Register extends Component {
  
	constructor(props) {
		super(props);
	}
	async handleRegistration() {
		const data = {
			firstName: document.getElementById("firstName").value,
			lastName: document.getElementById("lastName").value,
			username: document.getElementById("username").value,
			password: document.getElementById("password").value,
		};

		axios.post(URL + "/users/register", data).then(
			(res) => {
				console.log(res);
				document.getElementById("firstName").value = "";
				document.getElementById("lastName").value = "";
				document.getElementById("username").value = "";
				document.getElementById("password").value = "";
				//if(res && res.data.success) {
				alert("Registration successful, " + res.data.username + "!");
				//}
			}, (error) => {
				if (error.response.status === 400) {
          alert("Please enter data into all fields.")
          //document.querySelector('main').innerHTML += "<b>Please enter data into all fields.</b>";
				} else {
					alert(error.response.status + " error");
				}
			}
		);
	}

	render() {
		return (
			<div align="center">
				<h1>Register</h1>
        <i>(All fields are required)</i><br/><br/>
				<main>
					<div className="row">
						<label htmlFor="firstName">First name: </label>
						<input type="text" name="firstName" id="firstName" />
					</div>
					<div className="row">
						<label htmlFor="lastName">Last name: </label>
						<input type="text" name="lastName" id="lastName" />
					</div>
					<div className="row">
						<label htmlFor="username">Username: </label>
						<input type="text" name="username" id="username" />
					</div>

					<div className="row">
						<label htmlFor="password">Password: </label>
						<input type="text" name="password" id="password" />
					</div>

					<div>
						<br />
						<button onClick={this.handleRegistration}>
							Sign up
						</button>
					</div>
				</main>
			</div>
    );
    
	}
}

export default Register;

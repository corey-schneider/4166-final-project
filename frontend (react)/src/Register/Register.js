import React, { Component } from 'react';
import '../App2.css';
import axios from "axios";

let URL = 'http://localhost:3001'; // TODO change this when put on live web
 
class Register extends Component {
  constructor(props) {
    super(props);
}
  async handleRegistration() {
    const data = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
    };

    axios.post(URL+'/api/register', data).then(res => {
        console.log(res);
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        if(res && res.data.success) {
            alert("Registration successful, "+res.data.username+"!");
        }
    }, error => {
          alert(error.response.status+' error');
    });
}

  render() {
    return (
        <div align="center">
          <h1>Register</h1>
          <main>
            <div class="row">
                <label for="username">Username: </label>
                <input type="text" name="username" id="username"/>
            </div>

            <div class="row">
                <label for="password">Password: </label>
                <input type="text" name="password" id="password"/>
            </div>

            <div>
                <br/>
                <button onClick={this.handleRegistration}>Sign up</button>
            </div>
        </main>
        </div>
    );
  }
}
 
export default Register;
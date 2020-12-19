import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import '../App2.css';
import { HashRouter, NavLink } from "react-router-dom";
import axios from "axios";


    let URL = 'http://104.236.19.163:3001';
    let name = '';

class Login extends Component {

    constructor(props) {
        super(props);
        //this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            username : '',
            password : ''
        };
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
      }

    // async handleLogin2() {
    //     const data = {
    //         username: document.getElementById('username').value,
    //         password: document.getElementById('password').value,
    //     };

    //     axios.post(URL+'/api/login2', data).then(res => {
    //         console.log(res);
    //         document.getElementById('username').value = '';
    //         document.getElementById('password').value = '';
    //         if(res && res.data.success) {
    //             const token = res.data.token;
    //             localStorage.setItem('jwt', token);
    //             alert("success, "+res.data.username);
    //             name = res.data.username;
    //             this.getDashboard();
    //         }
    //     }, error => {
    //         if(error.response.status === 401) {
    //             alert('401 unauthorized error.');
    //         } else {
    //             alert(error.response.status+' error');
    //         }
    //     });
    // }

    // onSubmit = (event) => {
    //     event.preventDefault();
    //     fetch(URL+"/users/authenticate", {
    //         method: 'POST',
    //         body: JSON.stringify(this.state),
    //         headers: {
    //           'Content-Type': 'application/json'
    //         }
    //     }).then(res => {
    //         if (res.status === 200) {
    //             console.log(res);
    //             this.props.history.push('/');
    //           } else {
    //             const error = new Error(res.error);
    //             throw error;
    //           }
    //     }).catch(err => {
    //         console.error(err);
    //         alert('Error logging in please try again');
    //       });
    // }

    //This works much better.
    onSubmit = (event) => {
        event.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password
        };
        axios.post(URL+"/users/authenticate", data).then(res => {
            if (res.status === 200) {
                console.log(res);
                localStorage.setItem('jwt', res.data.token)
                this.props.history.push('/');
              } else {
                const error = new Error(res.error);
                throw error;
              }

        }).catch(err => {
            console.error(err);
            alert('Invalid username or password.');
        });
    }
    
    async handleLogin() {
        const data = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
        };

        axios.post(URL+'/users/authenticate', data).then(res => {
            console.log(res);
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            // if(res && res.data.success) {
            //     const token = res.data.token;
            //     localStorage.setItem('jwt', token);
            //     alert("Success! "+res.data.username);
            //     name = res.data.username;
            //     this.getDashboard();
            // }
            if(res.status === 200) {
                console.log(res);
                localStorage.setItem('jwt', res.data.token)
                alert("successfully logged in "+username);
                //this.props.history.push('/');
            }
        }, error => {
            if(error.response.status === 400) {
                alert('Invalid username or password.\nPlease check your credentials.');
            } else if(error.response.status === 401) {
                alert('401 unauthorized error.');
            } else {
                alert(error.response.status+' error');
            }
        });
    }

    getDashboard(props) {
        //alert("hello "+name+" from the dashboard");
        const token = localStorage.getItem('jwt');
        window.addEventListener('popstate', e => console.log(e) );
        history.pushState({success:true, myContent:'Dashboard pagee'}, '', '/dashboard')
        axios.get('/dashboard', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            if(res && res.data && res.data.success) {
                document.querySelector('h1.row').innerHTML = 'Dashboard';
                document.querySelector('main').innerHTML = res.data.myContent + "<br><button onclick=\"getSettings()\">Settings</button>" +
                "<button onclick=\"getPrices()\">Get prices</button>" +
                "<button onclick=\"logOut()\">Log out</button>";
            }
        });
    }



  render() {
    return (
        <div align="center">
          {/* <h1>Log in</h1>
          <main>
            <div className="row">
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username"/>
            </div>

            <div className="row">
                <label htmlFor="password">Password: </label>
                <input type="text" name="password" id="password"/>
            </div>

            <div>
                <br/> */}
                {/* <button onClick={this.handleLogin}>Log in</button> */}
            {/* </div>
        </main> */}


        <br/>
{/* this.onSubmit --> this.handleLogin */}
        <form onSubmit={this.handleLogin}>
        <h1>Log in </h1>
        <input
          type="username"
          name="username"
          placeholder="Enter username"
          value={this.state.username}
          onChange={this.handleInputChange}
          required
        /><br/>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        /><br/><br/>
        <input type="submit" value="Submit"/>
      </form>
        <br/><p>Don't have an account? <NavLink to="/register">Sign up</NavLink> now!</p>


        </div>
    );
  }
}
 
export default Login;
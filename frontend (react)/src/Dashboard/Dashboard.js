import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import '../App2.css';
import { NavLink } from "react-router-dom";
import axios from "axios";


    let URL = 'http://localhost:3001'; // TODO change this when put on live web

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.handleBudgetAdd = this.handleBudgetAdd.bind(this);
    }

    async handleBudgetAdd() {
        const data = {
          budgetName: document.getElementById('budgetName').value,
            amount: document.getElementById('amount').value,
        };

        //do something
        alert("Added "+budgetName.value+" for $"+amount.value+" to budget.");
    }


  render() {
    return (
        <div align="center">
          <h1>Add an item to your budget:</h1>
          <main>
            <div class="row">
                <label for="budgetName">Budget Name (i.e food): </label>
                <input type="text" name="budgetName" id="budgetName"/>
            </div>

            <div class="row">
                <label for="amount">Amount ($): </label>
                <input type="text" name="amount" id="amount"/>
            </div>

            <div>
                <br/>
                <button onClick={this.handleBudgetAdd}>Submit</button>
            </div>
        </main>
        </div>
    );
  }
}
 
export default Dashboard;
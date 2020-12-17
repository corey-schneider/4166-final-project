import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import "../App2.css";
import ChartPage from "../ChartPage/ChartPage";
import ColorPicker from "./ColorPicker";
import axios from "axios";


let URL = "http://localhost:3001"; // TODO change this when put on live web

class Dashboard extends Component {
	constructor(props) {
		super(props);
    //this.handleBudgetAdd = this.handleBudgetAdd.bind(this);
	}

	async handleBudgetAdd() {
    
    const data = {
      title: document.getElementById("budgetName").value,
      budget: parseInt(document.getElementById("amount").value),
      backgroundColor: document.getElementById("color").value
    }

    axios.post(URL+'/api/budget', data)
    .then(res => (
      alert("Successfully added " + budgetName.value + " for $" + amount.value + " with color "+color.value+" to your budget!"),
      window.location.reload(2500)
      )
      
      ).catch(error => {
        alert("ERROR. attached: "+error);
      });
    
  }


	render() {
		return (
			<div align="center">
				<h1>Add an item to your budget:</h1>
				<main>
					<div className="row">
						<label for="budgetName">Budget Name (i.e food): </label>
						<input type="text" name="budgetName" id="budgetName" />
					</div>

					<div className="row">
						<label for="amount">Amount ($): </label>
						<input type="text" name="amount" id="amount" />
					</div>

					<div className="row">
						<label for="color">Color ({this.props.color}): </label>
						<input type="text" name="color" id="color" />
            <ColorPicker/>
					</div>

					<div>
						<br />
						<button onClick={this.handleBudgetAdd}>Submit</button>
					</div>
          <div align="center">
            <button onClick={this.handleDeleteAll}>Delete ALL</button>
          </div>
          <br/>
          <div align="center">
            <p>Budgets:</p>
          </div>
				</main>

      <ChartPage/>

			</div>



		);
	}
}

export default Dashboard;

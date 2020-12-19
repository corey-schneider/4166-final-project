import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import "../App2.css";
import ChartPage from "../ChartPage/ChartPage";
import ColorPicker from "./ColorPicker";
import JsonTable from "./JsonTable";
import axios from "axios";


let URL = "http://104.236.19.163:3001";

class Dashboard extends Component {
	constructor(props) {
		super(props);
    //this.handleBudgetAdd = this.handleBudgetAdd.bind(this);
	}
	state = {
		background: '#ff0000',
	}

	async handleBudgetAdd() {
    
    const data = {
      title: document.getElementById("budgetName").value,
      budget: parseInt(document.getElementById("amount").value),
      backgroundColor: document.getElementById("coloring").textContent
    }

    axios.post(URL+'/api/budget', data)
    .then(res => {
      alert("Successfully added " + data.title + " for $" + data.budget + " with color "+data.backgroundColor+" to your budget!");
      window.location.reload(2500);
    }
      
      ).catch(error => {
        alert("ERROR. attached: "+error);
      });
    
  }

  async handleDeleteAll() {
    alert("still working on it, is this ur color: "+document.getElementById("coloring").textContent);
  }

  handleChange = (color, event) => {
	this.setState({ background: color.hex });
	alert("background is now ");
  };

	render() {
		return (
			<div align="center">
				<h1>Add an item to your budget:</h1>
				<main>
					<div className="row">
						<label htmlFor="budgetName">Budget Name: </label>
						<input type="text" name="budgetName" id="budgetName" placeholder="Eating out" />
					</div>

					<div className="row">
						<label htmlFor="amount">Amount (numbers only): </label>
						<input type="text" name="amount" id="amount" placeholder="55" />
					</div>

					<div className="row">
						<label htmlFor="color">Color: </label>
            <ColorPicker onChange={ this.handleChange }/>
						<p>Use the color picker to find a color you like. It will automatically apply!</p>
			
					</div>

					<div>
						<br />
						<button onClick={this.handleBudgetAdd}>Add to budget</button>
					</div>
          { <div align="center">
            {/* <button onClick={this.handleDeleteAll}>Delete ALL</button> */}
          </div> }
          <br/><hr/>
          <div align="center">
            <JsonTable/>
          </div>
				</main>

      <ChartPage/>

			</div>



		);
	}
}

export default Dashboard;

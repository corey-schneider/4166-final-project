import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { JsonToTable } from "react-json-to-table";

let URL = 'http://localhost:3001';

function JsonTable() {
	const [data, setData] = useState([]);

    // Pull in JSON data from the API
	const getData = () => {
		fetch(URL+"/api/budget", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then(function (response) {
				console.log(response);
				return response.json();
			})
			.then(function (myJson) {
				console.log(myJson);
				setData(myJson);
			});
	};
	useEffect(() => {
		getData();
	}, []);

	// ===================== //
	// DUMMY DATA            //
	// ===================== //
	const myJson = {
		Analyst: { name: "Jack", email: "jack@xyz.com" },
		"Loaded by": "Jills",
		"Load id": 34,
		"git id": "xxqaygqertqsg98qhpughqer",
		"Analysis Id": "7asdlnagsd98gfaqsgf",
		"Load Date": "July 12, 2018",
		"Data Source": "Study XY123-456",
		"Jira Ticket": "Foo-1",
		"Confluence URL": "http://myserver/wxyz",
		"Study sponsors": [
			{ name: "john", email: "john@@xyz.com" },
			{ name: "jane", email: "jane@@xyz.com" },
		],
	};

	return (
		<div className="JsonTable">
			<h3>Your budgets:</h3>
			<JsonToTable json={data} />
		</div>
	);
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<JsonTable />, rootElement);

export default JsonTable;

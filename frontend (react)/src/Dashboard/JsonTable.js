import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { JsonToTable } from "react-json-to-table";

let URL = 'http://104.236.19.163:3001';

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

	return (
		<div className="JsonTable">
			<h3>Your budgets for this month:</h3>
			<JsonToTable json={data} />
		</div>
	);
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<JsonTable />, rootElement);

export default JsonTable;

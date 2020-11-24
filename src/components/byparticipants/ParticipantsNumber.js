import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "../Navbar";

function ParticipantsNumber(props) {
	const [state, setState] = useState({
		id: "",
		activity: "",
		accessibility: 0,
		type: "",
		price: 0,
		participants: "",
	});

	useEffect(() => {
		async function fetchData() {
			try {
				const participants = props.match.params.participants;

				const response = await axios.get(
					`http://www.boredapi.com/api/activity?participants=${participants}`
				);

				setState({ ...response.data });
			} catch (err) {}
		}
		fetchData();
	}, [props]);

	return (
		<div>
			<Navbar />
			<div key={state.id} className="random">
				<h3>{state.activity ? state.activity.toUpperCase() : ""}</h3>
				<div className="random-p">
					<p>accessibility: {state.accessibility}</p>
					<p>type: {state.type}</p>
					<p>number of participants: {state.participants}</p>
					<p>price: {state.price === 0 ? "free" : state.price}</p>
				</div>
			</div>
		</div>
	);
}

export default ParticipantsNumber;

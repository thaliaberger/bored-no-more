import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./components/Homepage";
import ByType from "./components/bytype/ByType";
import ByPrice from "./components/byprice/ByPrice";
import ByParticipants from "./components/byparticipants/ByParticipants";
import ByAccesibility from "./components/byaccesibility/ByAccesibility";
import Random from "./components/Random";
import PriceLimit from "./components/byprice/PriceLimit";
import ParticipantsNumber from "./components/byparticipants/ParticipantsNumber";

function App() {
	return (
		<div className="container">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/type" component={ByType} />
					<Route exact path="/price" component={ByPrice} />
					<Route exact path="/participants" component={ByParticipants} />
					<Route exact path="/accesibility" component={ByAccesibility} />
					<Route exact path="/random" component={Random} />
					<Route exact path="/price/:price" component={PriceLimit} />
					<Route
						exact
						path="/participantsnumber/:participants"
						component={ParticipantsNumber}
					/>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;

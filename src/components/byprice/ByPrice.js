import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "../Navbar";

function ByPrice() {
	return (
		<div>
			<Navbar />
			{/* <div className="byprice-links">
				<Link to={"/price/0"}>Free</Link>
			</div>
			<div className="byprice-links">
				<Link to={"/price/0.1"}>0.1</Link>
			</div>
			<div className="byprice-links">
				<Link to={"/price/0.2"}>0.2</Link>
			</div>
			<div className="byprice-links">
				<Link to={"/price/0.3"}>0.3</Link>
			</div>
			<div className="byprice-links">
				<Link to={"/price/0.4"}>0.4</Link>
			</div>
			<div className="byprice-links">
				<Link to={"/price/0.5"}>0.5</Link>
			</div>
			<div className="byprice-links">
				<Link to={"/price/0.6"}>0.6</Link>
			</div>
			<div className="byprice-links">
				<Link to={"/price/0.7"}>0.7</Link>
			</div>
			<div className="byprice-links">
				<Link to={"/price/0.8"}>0.8</Link>
			</div> */}
			<div className="byprice-links">
				<h2 className="howmany-participant">Prices</h2>
				<Link to={"/price/free"}>
					<img src="" alt="free" />
				</Link>
			</div>
			<div className="byprice-links">
				<Link to={"/price/low"}>
					<img src="" alt="low price" />
				</Link>
			</div>
			<div className="byprice-links">
				<Link to={"/price/medium"}>
					<img src="" alt="medium price" />
				</Link>
			</div>
		</div>
	);
}

export default ByPrice;

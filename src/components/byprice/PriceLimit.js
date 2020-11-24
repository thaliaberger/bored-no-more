import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "../Navbar";

function PriceLimit(props) {
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
        const price = props.match.params.price;

        const response = await axios.get(
          `http://www.boredapi.com/api/activity?price=${price}`
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
        <h3>{state.activity ? state.activity.toLowerCase() : ""}</h3>
        <div className="random-p">
          <p>
            accessibility:{" "}
            {state.accessibility > 0 || state.accessibility < 10
              ? state.accessibility * 10
              : state.accessibility}
          </p>
          <p>type: {state.type}</p>
          <p>number of participants: {state.participants}</p>
          <p>
            price:{" "}
            {state.price === 0
              ? "free"
              : (state.price === 0.1) | (state.price === 0.2)
              ? "$"
              : (state.price === 0.3) | (state.price === 0.4)
              ? "$$"
              : (state.price === 0.5) | (state.price === 0.6)
              ? "$$$"
              : (state.price === 0.7) | (state.price === 0.8)
              ? "$$$$"
              : (state.price === 0.9) | (state.price === 1)
              ? "$$$$$"
              : ""}
          </p>
        </div>
        <Link to="/price">
          <button className="go-back">go back</button>
        </Link>
      </div>
    </div>
  );
}

export default PriceLimit;

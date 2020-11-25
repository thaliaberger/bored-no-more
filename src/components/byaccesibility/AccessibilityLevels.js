import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "../Navbar";

function AccessibilityLevels(props) {
  const [state, setState] = useState({
    id: "",
    activity: "",
    accessibility: 0,
    type: "",
    price: "",
    participants: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const level = props.match.params.accessibility;

        const response = await axios.get(
          `https://www.boredapi.com/api/activity?accessibility=${level}`
        );

        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [props]);

  function openTab() {
    window.open(state.link);
  }

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
              : state.price === 0.5
              ? "$$$"
              : state.price === 0.6
              ? "$$$$"
              : (state.price === 0.7) | (state.price === 0.8)
              ? "$$$$$"
              : "$$$"}
          </p>
          <Link onClick={openTab} className="external-link">
            <p>{state.link ? "hint" : ""}</p>
          </Link>
        </div>
        <Link to="/accessibility">
          <button className="go-back">go back</button>
        </Link>
      </div>
    </div>
  );
}

export default AccessibilityLevels;

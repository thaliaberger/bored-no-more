import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

function Random(props) {
  const [state, setState] = useState([]);

  const [joke, setJokes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://www.boredapi.com/api/activity/`
        );

        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const jokes = await axios.get(
          `https://official-joke-api.appspot.com/random_joke`
        );

        setJokes({ ...jokes.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

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
          <p>price: {state.price === 0 ? "free" : state.price}</p>
          <Link onClick={openTab} className="external-link">
            <p>{state.link ? "hint" : ""}</p>
          </Link>
        </div>
        <Link to="/random">
          <button className="go-back" onClick="window.location.reload()">
            try again
          </button>
        </Link>
        <div className="joke">
          <h3>since you like surprises...</h3>
          <p>{joke.setup ? joke.setup.toLowerCase() : ""}</p>
          <div className="joke-btn-answer">
            <button className="joke-button">see</button>
            <p className="joke-answer">
              {joke.punchline ? joke.punchline.toLowerCase() : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Random;

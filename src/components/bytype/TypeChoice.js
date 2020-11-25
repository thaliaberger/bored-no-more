import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "../Navbar";

function TypeChoice(props) {
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
        const choice = props.match.params.type;

        const response = await axios.get(
          `http://www.boredapi.com/api/activity?type=${choice}`
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

  function playList(type) {
    switch (type) {
      case "diy":
        return "https://www.youtube.com/embed/videoseries?list=PL4o29bINVT4EG_y-k5jGoOu3-Am8Nvi10";
      case "cooking":
        return "https://www.youtube.com/embed/videoseries?list=PLWlTX25IDqIwqowTsJmGhqxUWU_6qgG1W";
      case "music":
        return "https://www.youtube.com/embed/videoseries?list=PLk04Sg5I-2J2eFNupFjSCQBCaWVdgfWb4";
      case "relaxation":
        return "https://www.youtube.com/embed/videoseries?list=PLgzTt0k8mXzEpH7-dOCHqRZOsakqXmzmG";
      case "busywork":
        return "https://www.youtube.com/embed/videoseries?list=PLAWEj8wApm1wPxv851oi1qBATX9z9H6dZ";
      case "education":
        return "https://www.youtube.com/embed/videoseries?list=PLCULndnUE-_qsejHmyrPbci-RmI6liGbl";
      case "charity":
        return "https://www.youtube.com/embed/videoseries?list=PLoa2ILWoEoiFOezcQocVMOMzyJYrz7EQ8";
      case "recreational":
        return "https://www.youtube.com/embed/videoseries?list=PLj7hexz1cK1Q0urgcpxJpc-gETPAH8VFT";
      case "social":
        return "https://www.youtube.com/embed/videoseries?list=PL0Ea63JLhmBZ_QLx2CBC4QPeVNk3NUNne";
    }
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
        <Link to="/type">
          <button className="go-back">go back</button>
        </Link>
        <div className="youtube">
          <h3>suggested playlist for this category:</h3>
          <iframe
            width="560"
            height="315"
            src={playList(state.type)}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  );
}

export default TypeChoice;

import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../Navbar";

function ByAccessibility() {
  const [state, setState] = useState(0);

  function handleChange(event) {
    setState(event.currentTarget.value);
  }
  return (
    <div>
      <Navbar />
      <div className="access">
        <div className="slidecontainer">
          <input
            className="slider"
            type="range"
            min="0"
            max="1"
            step="0.1"
            onChange={handleChange}
            value={state}
          ></input>
        </div>
        <div className="slider-numbers">
          <p>0</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
        </div>
        <div className="most">
          <p className="easy">easier to do</p>
          <p className="hard">harder to do</p>
        </div>
        <Link to={`/accessibility/${state}`}>
          <button className="go-button">go</button>
        </Link>
      </div>
    </div>
  );
}

export default ByAccessibility;

import React, { useState, useEffect } from "react";
import axios from "axios";
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
        {/* <Link className="access-link access-zero" to={"/accessibility/0"}>
          0
        </Link>
        <Link className="access-link" to={"/accessibility/0.1"}>
          0.1
        </Link>
        <Link className="access-link" to={"/accessibility/0.2"}>
          0.2
        </Link>
        <Link className="access-link" to={"/accessibility/0.3"}>
          0.3
        </Link>
        <Link className="access-link" to={"/accessibility/0.4"}>
          0.4
        </Link>
        <Link className="access-link" to={"/accessibility/0.5"}>
          0.5
        </Link>
        <Link className="access-link" to={"/accessibility/0.6"}>
          0.6
        </Link>
        <Link className="access-link" to={"/accessibility/0.7"}>
          0.7
        </Link>
        <Link className="access-link" to={"/accessibility/0.8"}>
          0.8
        </Link>
        <Link className="access-link" to={"/accessibility/0.9"}>
          0.9
        </Link>
        <Link className="access-link" to={"/accessibility/1"}>
          1
        </Link> */}
      </div>

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
        <p>most accessible</p>
      </div>
      <Link to={`/accessibility/${state}`}>
        <button className="go-button">go</button>
      </Link>
      {/* <p>{state}</p> */}
    </div>
  );
}

export default ByAccessibility;

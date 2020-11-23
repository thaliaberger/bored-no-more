import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "../Navbar";

function ByAccessibility() {
  //   output.innerHTML = slider.value;
  // slider.oninput = function() {
  //   output.innerHTML = this.value;
  // }
  return (
    <div>
      <Navbar />
      <div className="access">
        <Link className="access-link access-zero" to={"/accessibility/0"}>
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
        </Link>

        <div className="most">most accessible</div>
      </div>
      {/* <div className="slidecontainer">
        <input type="range" min="1" max="10" value="5" className="slider" />
      </div> */}
    </div>
  );
}

export default ByAccessibility;

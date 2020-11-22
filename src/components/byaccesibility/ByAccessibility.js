import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "../Navbar";

function ByAccessibility() {
  return (
    <div>
      <Navbar />
      <div className="access">
        <Link className="access-link" to={"/accessibility/0"}>
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
      </div>
    </div>
  );
}

export default ByAccessibility;

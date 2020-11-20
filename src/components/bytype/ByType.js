import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "../Navbar";

function ByType() {
  return (
    <div className="bytype">
      <Navbar />
      <div className="firstRow">
        <Link className="purple" to={"/"}>
          diy
        </Link>
        <Link className="purple" to={"/"}>
          music
        </Link>
        <Link className="purple" to={"/"}>
          recreational
        </Link>
      </div>

      <div className="secondRow">
        <Link className="blue" to={"/"}>
          social
        </Link>
        <Link className="blue" to={"/"}>
          cooking
        </Link>
        <Link className="blue" to={"/"}>
          relaxation
        </Link>
      </div>
      <div className="thirdRow">
        <Link className="purple" to={"/"}>
          charity
        </Link>
        <Link className="purple" to={"/"}>
          busywork
        </Link>
        <Link className="purple" to={"/"}>
          education
        </Link>
      </div>
    </div>
  );
}

export default ByType;

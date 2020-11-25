import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../Navbar";

function ByType() {
  return (
    <div className="bytype">
      <Navbar />
      <div className="firstRow">
        <Link className="purple" to={"/type/diy"}>
          diy
        </Link>
        <Link className="purple" to={"/type/music"}>
          music
        </Link>
        <Link className="purple" to={"/type/recreational"}>
          recreational
        </Link>
      </div>

      <div className="secondRow">
        <Link className="blue" to={"/type/social"}>
          social
        </Link>
        <Link className="blue" to={"/type/cooking"}>
          cooking
        </Link>
        <Link className="blue" to={"/type/relaxation"}>
          relaxation
        </Link>
      </div>
      <div className="thirdRow">
        <Link className="purple" to={"/type/charity"}>
          charity
        </Link>
        <Link className="purple" to={"/type/busywork"}>
          busywork
        </Link>
        <Link className="purple" to={"/type/education"}>
          education
        </Link>
      </div>
    </div>
  );
}

export default ByType;

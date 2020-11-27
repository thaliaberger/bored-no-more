import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage">
      <img
        className="logo"
        src="https://i.ibb.co/3MBXp8r/boredlogo-3.png"
        alt="logo"
      />
      <div className="links-home">
        <Link className="link" to={"/type"}>
          type
        </Link>
        <Link className="link" to={"/price"}>
          price
        </Link>
        <Link className="link" to={"/participants"}>
          number of participants
        </Link>
        <Link className="link" to={"/accessibility"}>
          accessibility
        </Link>
        <Link className="link surprise" to={"/random"}>
          surprise me
        </Link>
      </div>
    </div>
  );
}

export default Homepage;

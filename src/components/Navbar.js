import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <img
          src="https://i.ibb.co/3MBXp8r/boredlogo-3.png"
          className="logo-nav"
        />
      </Link>
      <div className="links-navbar">
        <Link className="link2" to={"/type"}>
          type
        </Link>
        <Link className="link2" to={"/price"}>
          price
        </Link>
        <Link className="link2" to={"/participants"}>
          number of participants
        </Link>
        <Link className="link2" to={"/accessibility"}>
          accessibility
        </Link>
        <Link className="link2 surprise" to={"/random"}>
          surprise me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <img
          src="https://i.postimg.cc/ZbdDV5LX/boredlogo-2.png"
          className="logo-nav"
        />
      </Link>
      <div className="links-navbar">
        <Link className="link2" to={"/type"}>
          by type
        </Link>
        <Link className="link2" to={"/price"}>
          by price
        </Link>
        <Link className="link2" to={"/participants"}>
          by participants
        </Link>
        <Link className="link2" to={"/accesibility"}>
          by accesibility
        </Link>
        <Link className="link2 surprise" to={"/random"}>
          surprise me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

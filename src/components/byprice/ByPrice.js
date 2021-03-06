import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../Navbar";

function ByPrice() {
  function darker(event) {
    event.target.style.color = "rgb(56,147,147)";
    let cifrao = Array.from(event.target.parentElement.children);
    cifrao.map((item) =>
      item.id <= event.target.id ? (item.style.color = "rgb(56,147,147)") : ""
    );
  }

  function regular(event) {
    let cifrao = Array.from(event.target.parentElement.children);
    cifrao.map((item) => (item.style.color = "rgb(142,198,197)"));
  }

  return (
    <div>
      <Navbar />
      <div className="byprice">
        <div>
          <Link className="free-text" to={"/price/0"}>
            free options
          </Link>
        </div>

        <div className="byprice-links">
          <Link
            onMouseEnter={darker}
            onMouseLeave={regular}
            className="money money1"
            id="1"
            to={`/price/0.${Math.round(Math.random() * (2 - 1)) + 1}`}
          >
            $
          </Link>
          <Link
            onMouseEnter={darker}
            onMouseLeave={regular}
            className="money money2"
            id="2"
            to={`/price/0.${Math.round(Math.random() * (4 - 3)) + 3}`}
          >
            $
          </Link>
          <Link
            onMouseEnter={darker}
            onMouseLeave={regular}
            className="money money3"
            id="3"
            to={"/price/0.5"}
          >
            $
          </Link>
          <Link
            onMouseEnter={darker}
            onMouseLeave={regular}
            className="money money4"
            id="4"
            to={"/price/0.6"}
          >
            $
          </Link>
          <Link
            onMouseEnter={darker}
            onMouseLeave={regular}
            className="money money5"
            id="5"
            to={"/price/0.8"}
          >
            $
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ByPrice;

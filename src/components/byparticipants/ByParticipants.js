import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "../Navbar";

function ByParticipants() {
  return (
    <div>
      <Navbar />
      <div className="link-wrap">
        <div className="participants-link">
          <Link to={"/participants/1"}>
            <img
              src="https://i.ibb.co/S3wBjvd/Design-sem-nome-6.png"
              alt="one person"
            />
          </Link>
        </div>
        <div className="participants-link">
          <Link to={"/participants/2"}>
            <img
              src="https://i.ibb.co/TTRV4RK/Design-sem-nome-4.png"
              alt="two pp"
            />
          </Link>
        </div>
        <div className="participants-link">
          <Link to={"/participants/3"}>
            <img
              src="https://i.ibb.co/xMggQv9/Design-sem-nome-3.png"
              alt="three pp"
            />
          </Link>
        </div>
        <div className="participants-link">
          <Link to={"/participants/4"}>
            <img
              src="https://i.ibb.co/zfpVtFR/Design-sem-nome-1.png"
              alt="four pp"
            />
          </Link>
        </div>
        <div className="participants-link">
          <Link to={"/participants/5"}>
            <img
              src="https://i.ibb.co/c80HSqR/Design-sem-nome-2.png"
              alt="five pp"
            />
          </Link>
        </div>
        <div className="participants-link">
          <Link to={"/participants/8"}>
            <img
              src="https://i.ibb.co/cDRfKdr/Design-sem-nome-5.png"
              alt="eigth pp"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ByParticipants;

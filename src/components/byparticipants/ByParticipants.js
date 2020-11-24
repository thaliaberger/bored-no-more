import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "../Navbar";

function ByParticipants() {
  return (
    <div>
      <Navbar />
      <Link to={""}>1</Link>
      <Link to={""}>2</Link>
      <Link to={""}>3</Link>
      <Link to={""}>4</Link>
      <Link to={""}>5</Link>
      <Link to={""}>8</Link>
    </div>
  );
}

export default ByParticipants;

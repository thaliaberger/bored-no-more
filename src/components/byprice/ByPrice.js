import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "../Navbar";

function ByPrice() {
  return (
    <div>
      <Navbar />
      <Link to={""}>free</Link>
      <Link to={""}>0.1</Link>
      <Link to={""}>0.2</Link>
      <Link to={""}>0.3</Link>
      <Link to={""}>0.4</Link>
      <Link to={""}>0.5</Link>
      <Link to={""}>0.6</Link>
      <Link to={""}>0.7</Link>
      <Link to={""}>0.8</Link>
      <Link to={""}>0.9</Link>
      <Link to={""}>1</Link>
    </div>
  );
}

export default ByPrice;

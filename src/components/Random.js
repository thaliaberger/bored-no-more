import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

function Random(props) {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const activity = props.match.params.id;

        const response = await axios.get(
          `http://www.boredapi.com/api/activity/`
        );

        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [props]);

  return (
    <div>
      <Navbar />
      <div key={state.id} className="">
        <div>
          <img src={state.image_url} className="" />
        </div>
        <div>
          <h3>{state.activity}</h3>
          <p>accesibility: {state.accessibility}</p>
          <p>type: {state.type}</p>
          <p>number of participants: {state.participants}</p>
          <p>price:{state.price}</p>
          <Link to={"${state.link}"}>
            <p>{state.link}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Random;

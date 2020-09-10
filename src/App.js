import React, { useState, useEffect } from "react";
import "./App.css";
import Character from "./components/Character.js";

import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [rmData, setRMData] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          `https://rickandmortyapi.com/api/character/
          `
        )
        .then((res) => {
          setRMData(res.data.results);
          console.log(res);
        })
        .catch((err) => {
          console.log(err, "this did not work");
        });
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="logo"></div>
      <h3>Find out who is dead or alive!</h3>
      <Character charData={rmData}></Character>
    </div>
  );
};

export default App;

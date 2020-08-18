import React from "react";
import logo from "./logo.svg";
import Greetings from "./Greetings";
import "./App.css";

function App() {
  const Consoler = (name: string) => {
    console.log(`${name} says hello`);
  };
  return (
    <div className="App">
      <Greetings name="민규" onClick={Consoler} />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Container1 from "./components/container1";

function App() {
  return (
    <div className="App">
      <div className="ui raised segment p-3">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <Container1 />
      </div>
    </div>
  );
}

export default App;

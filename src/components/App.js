import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div id="main" className="bg-pink">
      {isClicked && (
        <p>
          <h1>This is a paragraph</h1>
        </p>
      )}
      <button id="button" onClick={handleClick}>
        Click me
      </button>
      // Do not alter the main div
    </div>
  );
}

export default App;

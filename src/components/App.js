import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [renderClick, setState] = useState(false);
  const renderIt = ()=>{ 
    setState(true);
  }
  return (
    <div id="main">
     {renderClick ? <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p> : null }
      <button id="click" onClick={renderIt}>Click me</button>
    </div>
  );
}


export default App;

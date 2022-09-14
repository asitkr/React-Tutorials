import React, { useState } from 'react';
import './App.css';

function App() {

  const [status, setStatus] = useState(false);

  return (
    <div className="App">
      {/* Show and Hide */}
      {/* <button onClick={() => setStatus(false)}>Hide Me</button>
      <button onClick={() => setStatus(true)}>Show Me</button> */}

      {/* Toggle */}
      <button onClick={() => setStatus(!status)}>Toggle (Show / Hide)</button>

      {
        status ? <h1>React Js</h1> : null
      }

    </div>
  );
}

export default App;

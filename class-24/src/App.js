import React, { useEffect, useState } from 'react';
import './App.css';

// useEffect

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.warn("useEffect 1");
  })

  useEffect(() => {
    console.warn("useEffect 2");
  })


  return (
    <div className="App">
      <h1>useEffect Hook {count}</h1>
      <button onClick={() => setCount(count+1)}>Click me</button>
    </div>
  );
}

export default App;

import { useRef } from 'react';
import './App.css';

// useRef Hook example

function App() {

  let inputRef =  useRef(null);

  const handleInput = () => {
    console.warn("useRef called");
    inputRef.current.value = "100";
    inputRef.current.focus();
  }

  return (
    <div className="App">
      <h1>useRef Hook example</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>Handle Input useRef</button>
    </div>
  );
}

export default App;

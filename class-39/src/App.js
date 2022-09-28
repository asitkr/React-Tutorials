import { useRef } from 'react';
import './App.css';
import User from './User';

// forwardRef example

function App() {

  const handleInput = () => {
    inputRef.current.value = "5000";
    inputRef.current.focus();
  }

  return (
    <div className="App">
      <h1>forwardRef</h1>
      <User ref={inputRef} />
      <button onClick={handleInput}>Upadate Input</button>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import User from './User';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Previous Props</h1>
      <User count={count} />
      <button onClick={() => setCount(Math.floor(Math.random() * 10))}>Click Me to Upadate counter</button>
    </div>
  );
}

export default App;

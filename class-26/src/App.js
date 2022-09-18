import { useState } from 'react';
import './App.css';
import User from './User';

function App() {

  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);

  return (
    <div className="App">
      <User data={data} count={count} />

      <button onClick={() => setData(data + 1)}>Upadate Data</button>
      <button onClick={() => setCount(count + 1)}>Upadate Count</button>
    </div>
  );
}

export default App;
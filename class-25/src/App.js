import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);

  useEffect(() => {
    console.warn("useEffect Data " + data);
  }, [data])

  useEffect(() => {
    alert("useEffect count " + count);
  }, [count])

  return (
    <div className="App">
      <h1>Updated Data : {data}</h1>
      <h1>Updated Count : {count}</h1>
      <button onClick={() => setData(data + 1)}>Update Data</button>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </div>
  );
}

export default App;

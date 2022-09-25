import './App.css';
import { useMemo, useState } from 'react';

// useMemo Hook work same as pureComponent()

function App() {

  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo(() => {
    console.warn("useMemo Hook called");
    return count * 10;
  }, [count])

  return (
    <div className="App">
      <h1>useMemo Hook in React</h1>
      <h3>Count : {count}</h3>
      <h3>Item : {item}</h3>
      <p>{multiCountMemo}</p>
      <button onClick={() => setCount(count+1)}>Update Count</button>
      <button onClick={() => setItem(item+1)}>Update Item</button>
    </div>
  );
}

export default App;

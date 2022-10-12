import { useState } from 'react';
import './App.css';

// Hight order component (HOC)

function App() {
  return (
    <div className="App">
      <h1>Hight order component (HOC)</h1>

      <HOCRed component={Counter} />
      <HOCGreen component={Counter} />
    </div>
  );
}

function HOCRed(props) {
  return <h1 style={{color: "green"}}><props.component /></h1>
}

function HOCGreen(props) {
  return <h1 style={{color: "red"}}><props.component /></h1>
}

function Counter() {

  const [count, setCount] = useState(0);

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me to Upadate</button>
    </div>
  )
}

export default App;

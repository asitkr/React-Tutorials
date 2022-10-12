import { useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState("");

  return (
    <div className="App">
      <h1>Controlled Component</h1>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}

export default App;

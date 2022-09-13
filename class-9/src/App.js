import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("Ashit");

  function updateName() {
    setName("Change Name is: Rohan");
  }

  console.warn("+++++++++++++++++++++=============")

  return (
    <div className="App App-header">
      <h1>{name}</h1>
      <button onClick={updateName}>Click Me to Change Name</button>
    </div>
  );
}

export default App;

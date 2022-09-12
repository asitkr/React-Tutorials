import { useState } from 'react';
import './App.css';
import User from './User';

function App() {

  const [name, setName] = useState('');

  function handleSubmit() {
    alert(`Name: ${name}`);
  }

  return (
    <div className="App">
      <h3>Controlled Component</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>

      <User />
    </div>
  );
}

export default App;

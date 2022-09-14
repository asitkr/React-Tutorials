import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [intrest, setIntrest] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    console.log(intrest);
    console.log(tnc);
  }

  return (
    <div className="App">
      <h1>Handle form in React</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} /> <br/><br/>
        <select onChange={(e) => setIntrest(e.target.value)}>
          <option>Select anyone:</option>
          <option>Java</option>
          <option>JavaScript</option>
          <option>ReactJS</option>
        </select> <br/><br/>
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /> <span>Accept Terms & Condition</span> <br/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

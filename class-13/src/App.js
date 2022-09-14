import { useState } from 'react';
import './App.css';
import Student from './Student';

function App() {

  const [print, setPrint] = useState('')

  function updatedata(val) {
    setPrint(val.target.value);
  }

  return (
    <div className="App">
      <h1>Enter here...!</h1>
      <p>{print}</p>
      <input type="text" onChange={updatedata} />

      <br />
      <hr />

      <Student />
    </div>
  );
}

export default App;

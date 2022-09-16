import { useState } from 'react';
import './App.css';
import User from './User';

function App() {

  const [name, setName] = useState('Ashit');

  return(
    <div className='App'>
      <User />
      {/* <button onClick={() => setName("Rohan")}>Click Me</button> */}
    </div>
  )
}

export default App;

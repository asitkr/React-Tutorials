import { useRef } from 'react';
import './App.css';

function App() {

  let inputRef1 = useRef(null);
  let inputRef2 = useRef(null);

  const handleForm = (e) => {
    e.preventDefault();
    console.warn("input field 1", inputRef1.current.value);
    console.warn("input field 2", inputRef2.current.value);
  }

  return (
    <div className="App">
      <form onSubmit={handleForm}>
        <input ref={inputRef1} type="text" /> <br/><br/>
        <input ref={inputRef2} type="text" /> <br/><br/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

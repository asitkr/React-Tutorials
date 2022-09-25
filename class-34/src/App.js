import './App.css';
import User from './User';

// Send Data Child to Parent Component

function App() {

  function parentAlert(item){
    alert(item);
  }

  return (
    <div className="App">
      <h1>Lifting State Up</h1>
      <User name={parentAlert} />
    </div>
  );
}

export default App;

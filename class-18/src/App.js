import './App.css';
import User from './User';
import Members from './Members';

// Pass Function as Props

// yes we can pass function to super child e.g we have component <Greet /> in User component So then we will use like this <Greet toggle={props.data}/>
// now button in Greet components will be 
// <button onClick={props.toggle}>button Greet<button>
// clicking button greet will have the same output as button in user

function App() {

  function getData(){
    alert("hello from data");
  }

  return (
    <div className="App">
      <User data={getData} />
      <div>
        <Members data={getData} />
      </div>
    </div>
  );
}

export default App;

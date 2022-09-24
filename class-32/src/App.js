import './App.css';
import User from './User';

function App() {

  const users = [
    {name: "Ashit", email: "abc@gmail.com", contact: 222},
    {name: "Utkarsh", email: "fgh@gmail.com", contact: 333},
    {name: "Vibhanshu", email: "pqr@gmail.com", contact: 555},
    {name: "Rohan", email: "nop@gmail.com", contact: 777},
    {name: "Ayush", email: "klm@gmail.com", contact: 333},
    {name: "Abhilash", email: "xyz@gmail.com", contact: 999},
    {name: "Sandesh", email: "stv@gmail.com", contact: 333},
  ]

  return (
    <div className="App">
      <h1>Reuse Component with list</h1>
      {
        users.map((item, i) => 
          <User data={item} />
        )
      }
    </div>
  );
}

export default App;

import './App.css';
import Students from './Components/Students';
import React, { useState } from 'react';

function App() {

  const [name, setName] = useState("Ashit");

  return (
    <div className="App App-header">
        <Students name={name } />
        {/* <Students name={ "Vibhanshu" } age={28} phone={8804742626} other={{states: "RJ", mob: 911}}/>
        <Students name={ "Utkarsh" } email={"abcd@gmail.com"} other={{states: "UP", mob: 311}} />
        <Students name={ "Abhilash"} city={"Delhi"} other={{states: "MP", mob: 511}} />
        <Students name={ "Ashit" } other={{states: "B", mob: 811}} /> */}

        <button onClick={() => setName("Roshan")}>Change Name</button>
    </div>
  );
}

export default App;

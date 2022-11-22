import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({name: "raj", age: 22, email: "abc@gml.com"});
  return (
    <div className="App">
      {/* <input type="text" value={data.name} onChange={(e) => setData({age: data.age, name: e.target.value})} />
      <input type="number" value={data.age} onChange={(e) => setData({name: data.name, age: e.target.value})} /> */}

      <input type="text" value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
      <input type="number" value={data.age} onChange={(e) => setData({...data, age: e.target.value})} />
      <input type="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />

      <h1>{data.name}</h1>
      <h1>{data.age}</h1>
      <h1>{data.email}</h1>
    </div>
  );
}

export default App;

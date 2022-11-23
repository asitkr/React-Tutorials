import React, { createContext, useState } from 'react';
import './App.css';
import Child from './Component/Child';
import OtherChild from './Component/OtherChild';

export const ColorInfo = createContext();

function App() {

  const [color, setColor] = useState("blue");

  return (
    <ColorInfo.Provider value={{appColor: color}}>
      <div className="App">
        <h1>App Component</h1>
        <Child />
        <OtherChild />
      </div>
    </ColorInfo.Provider>
  );
}

export default App;

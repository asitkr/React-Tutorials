import React, { createContext } from 'react';
import './App.css';
import ComponentC from './component/ComponentC';

export const UserContext = createContext();
export const ChannelContext = createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Ashit'}>
        <ChannelContext.Provider value={'Youtube'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;

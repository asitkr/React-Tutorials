import React, { Fragment } from 'react';
import './App.css';
import User from './User';

function App() {
  return (
    // <Fragment>
    //   <h1>Fragment Component</h1>
    // </Fragment>

    // <React.Fragment>
    //   <h1>Fragment Component</h1>
    // </React.Fragment>

    <>
      <h1>Fragment Component</h1>
      <User />
    </>
  );
}

export default App;

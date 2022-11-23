import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decNumber, incNumber } from './actions/index';
import './App.css';

function App() {

  const state = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className='container'>
        <h1>Counter App</h1>
        <h3>using React and Redux</h3>
        <div className='quantity'>
          <a className='quantity__minus' onClick={() => dispatch(decNumber(1))}><span>-</span></a>
          <input type='text' className='quantity__input' value={state} />
          <a className='quantity__plus' onClick={() => dispatch(incNumber(1))}><span>+</span></a>
        </div>
      </div>
    </>
  );
}

export default App;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
    
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div className='container'>
            <button className='btn btn-success me-5' onClick={() => dispatch(increment(1))}>+</button>
            <span className='fs-2 p-3 bg-warning text-dark'>Count: {count}</span>
            <button className='btn btn-danger ms-5' disabled={count === 0} onClick={() => dispatch(decrement(1))}>-</button>
        </div>
    )
}

export default Counter;
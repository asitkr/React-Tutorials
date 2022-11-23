import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreator } from './state';

function Shop() {

    const amount = useSelector(state => state.amount);

    const dispatch = useDispatch();
    const {withdrawMoney, depositeMoney} = bindActionCreators(actionCreator, dispatch)

    return (
        <div>
            <h2>Deposite/Withdraw money</h2>
            {/* <button className="btn btn-primary me-5" onClick={() => {dispatch(actionCreator.withdrawMoney(1))}}>-</button>
            Update Balance
            <button className="btn btn-primary ms-5" onClick={() => {dispatch(actionCreator.depositeMoney(1))}}>+</button> */}
            <button className="btn btn-primary me-5" onClick={() => withdrawMoney(1)}>-</button>
            Update Balance ({amount})
            <button className="btn btn-primary ms-5" onClick={() => depositeMoney(1)}>+</button>
        </div>
    )
}

export default Shop
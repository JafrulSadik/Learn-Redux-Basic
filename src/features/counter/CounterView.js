import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from './counterSlice';

const CounterView = () => {

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h3>Counter</h3>
            <h5>Count: {count}</h5>
            <button onClick={() => {
                dispatch(increment())
            } }>Increment</button>
            <br />
            <button onClick={() => {
                dispatch(decrement())
            } }>Decrement</button>
            <br />
            <button onClick={() => {
                dispatch(reset())
            } }>Reset</button>
        </div>
    );
};

export default CounterView;
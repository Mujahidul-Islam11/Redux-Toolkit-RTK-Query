import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from "./redux/features/counterSlice.js"

const Counter = () => {
    // Read the data from the store 
    const count = useSelector((state) => state.counter.value);

    // Changing the data by sending "actions" to the store
    const dispatch = useDispatch();
    return (
        <div style={{marginTop: "150px"}}>
            <h3 style={{fontSize: "65px", textAlign: "center"}}>{count}</h3>
            <div style={{display: "flex", justifyContent: "center", gap: "20px"}}>
            <button onClick={()=> dispatch(decrement())}>Decrease (- 1)</button>
            <button onClick={()=> dispatch(increment())}>Increase (+ 1)</button>
            </div>
        </div>
    );
};

export default Counter;
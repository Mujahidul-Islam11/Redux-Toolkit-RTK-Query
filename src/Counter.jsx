import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "./redux/features/counterSlice";


const Counter = () => {
    const count = useSelector((state)=> state.counter.count);
    const dispatch = useDispatch();
    
    return (
        <div style={{marginTop: "150px"}}>
            <h3 style={{fontSize: "65px", textAlign: "center"}}>{count}</h3>
            <div style={{display: "flex", justifyContent: "center", gap: "24px"}}>
            <button onClick={()=> dispatch(incrementByValue(5))}>Increment By 5 (+ 5)</button>
            <button onClick={()=> dispatch(incrementByValue(10))}>Increment By 10 (+ 10)</button>
            <button onClick={()=> dispatch(decrement())}>Decrease (- 1)</button>
            <button onClick={()=> dispatch(increment())}>Increase (+ 1)</button>
            </div>
        </div>
    );
};

export default Counter;
import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({   // compare with the bellow to understand
    name: "counter",                 // const [counter, setCounter] = useState()
    initialState: {value: 0},        // useState(0) -> you can also give anything instead of value in the object
    reducers: {                      // setCounter(counter++) / setCounter(counter--)
         increment(state){           
            state.value++
         },
         decrement(state){
            state.value--
         }
    }
})

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;
import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({   // compare with the bellow to understand
    name: "counter",                 // const [counter, setCounter] = useState()
    initialState: {value: 0},        // useState(0) -> you can also give anything instead of value in the object
    reducers: {                      // setCounter(counter++) / setCounter(counter--)
         increment(state){           
            state.value++
         },
         decrement(state){
            state.value--
         },
         incrementByValue(state, actions){
            state.value = state.value + actions.payload;
         }
    }
})

export const {increment, decrement, incrementByValue} = counterSlice.actions;
export default counterSlice.reducer;
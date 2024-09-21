import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./features/counterSlice.js"
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsAPI } from "./services/dummyData";

export const store = configureStore({
    reducer: {
        // counter: counterReducer,
        [productsAPI.reducerPath]: productsAPI.reducer,   
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productsAPI.middleware),
});

setupListeners(store.dispatch);
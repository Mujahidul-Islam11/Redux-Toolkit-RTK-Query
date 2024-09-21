<h1 align="left">Redux Toolkit & RTK query</h1>

<h3>
# What is Redux?
</h3>
<p>
Redux is an open-source <b>JavaScript Library</b> for managing state of an application in a predictable way. It's commonly used with libraries like ReactJs for building user interfaces but it can also be used with any JavaScript framework or library.
</p>
<div align="center"> 
  <a href="https://redux-toolkit.js.org/introduction/getting-started">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRypt9wK5ScxQsfzkgr3QDCtPCCwMX56eJtGQ&s" alt="Redux" />
  </a>
</div>
<p align="center">
The official, opinionated, batteries-included toolset for efficient Redux Development.
</p>

<div align="center">
<h4>Redux -> Makes the state management easy.</h4>
<h4>Redux Toolkit-> Makes the redux easy to work with.</h4>
</div>

<br>
<br>

<h2># Setup & Installation</h2>

```bash
npm create vite@latest my-project -- -- template react
cd my-project
npm install
npm install @reduxjs/toolkit react-redux
```

<br>

<b>:create your first redux store ;)</b>

```bash
// store.js

import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore(
  {
    reducer: {}
  }
);
```

<br>

<b>:Use your store wherever you want ;0</b>

```bash
// main.jsx

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
```

<br>
<h3>
# What is Slice?
</h3>
<p>
A slice is a <b>piece of store state</b> and corresponding reducer logic to update that state. Slices are a way to organize our redux store by breaking it down into smaller, and more manageable parts.
</p>

<br>
<h3>
# Slices Analogy
</h3>
<p>
Imagine you have a big cake, and you want to cut it into smaller and more manageable pieces. Each smaller piece is like a <i>"slice"</i> of cake. In the context redux toolkit a <i>"slice"</i> is like a smaller part of your application's state and the instruction on how to change and update that specific part.
</p>

<b>:Create your very first counter slice :)</b>

```bash
// ./src/features/counterSlice.js

import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({   // compare with the bellow to understand
    name: "counter",                 // const [counter, setCounter] = useState()
    initialState: {value: 0},        // useState(0) -> you can also give anything instead of value
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
```

<b>: import and use counterReducer in your store</b>

```bash
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice.js"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});
```

<br>
<h3>
# useSelector() - Hook
</h3>
<p>
useSelector allows us to <b>access and read data</b> from the redux store.
</p>

<br>
<h3>
# useDispatch() - Hook
</h3>
<p>
The dispatch function is used to send actions to the store, triggering updates to the applcation state. 
In similar terms, it lets you <b>change the state</b> in your Redux store within your React Components.
</p>

<br>
<b>: Take actions to update the store ;)</b>

```bash
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
```

<b>
: Do not forget to render Counter component in the App.jsx ;)
</b>

```bash
import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <div>
      <Counter/>
    </div>
  );
};

export default App;
```

<br>

<h2>
# Redux Toolkit Query
</h2>
<h3>
# What is RTK Query?
</h3>
<p>
Redux Toolkit Query (RTK) is specially designed for <b>data fetching</b> caching, and state management
for API calls in a React and Redux application.
</p>

<b>:What we will learn? :D</b>

<ul>
<li>How to Get All Products</li>
<li>How to Get a Specific Product</li>
<li>How to Add a New Product</li>
<li>How to Update a Product</li>
<li>How to Delete a Product</li>
</ul>


<b>:Get all products from a dummyData using RTK query'-'</b>

```bash
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const productsAPI = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    endpoints: (builder) => {
        // Get all data
        getAllProducts: builder.query({
            query: ()=> "/products"
        })
    }
})

export const { useGetAllProductsQuery } = productsAPI;
```
<br>
<b>:Register the productsAPI in store.js</b>

```bash
// store.js

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsAPI } from "./services/dummyData";

export const store = configureStore({
    reducer: {
        [productsAPI.reducerPath]: productsAPI.reducer,   
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware.concat(productsAPI.middleware),
});

setupListeners(store.dispatch);
```

<br>
<b>:Load the data in a component :d</b>

```bash
// AllProducts.jsx

import { useGetAllProductsQuery } from "../redux/services/dummyData";

const AllProducts = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log(data)
  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div  style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "25px"}}>
          {
            data?.products?.map(product => (<div>
            <div>
          <img src={product?.thumbnail} alt={product?.title} />
            <h3>{product?.title}</h3>
            </div>
            </div>))
          }
        </div>
      ) : null}
    </>
  );
};

export default AllProducts;

```

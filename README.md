

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
<p>
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
npm create vite@latest project-name -- -- template react
cd project-name
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
Imagine you have a big cake, and you want to cut it into smaller and more manageable pieces. Each smaller piece is like a "slice" of cake. In the context redux toolkit a "slice" is like a smaller part of your application's state and the instruction on how to change and update that specific part.
</p>
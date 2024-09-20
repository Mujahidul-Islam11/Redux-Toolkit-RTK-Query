

<h1 align="left">Redux Toolkit & RTK query</h1>

<h3>
# What is Redux?
</h3>
<p>
Redux is an open-source "JavaScript Library" for managing state of an application in a predictable way. It's commonly used with libraries like ReactJs for building user interfaces but it can also be used with any JavaScript framework or library.
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

<h2>Setup & Installation</h2>

```bash
npm create vite@latest project-name -- -- template react
cd project-name
npm install
npm install @reduxjs/toolkit react-redux
```

:create your first redux store ;)

```bash
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore(
  {
    reducer: {}
  }
);
```
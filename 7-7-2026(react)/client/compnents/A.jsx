 import React from 'react'
 
 export default function A() {
   return (
     <div>
       <h1>this is a functional componenet</h1>
     </div>
   )
 }
 
 function App() {
    return (
        <div>
            <h1>Hello</h1>
            <p>React</p>
        </div>
    );
}

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

function greet() {
    return "Welcome to React";
}

function App() {
    return (
        <h1>{greet()}</h1>
    );
}

export default App;

//valid
return (
    <div>
        <h1>Hello</h1>
        <p>React</p>
    </div>
);

//
const name = "Mouli";

function App() {
    return (
        <h1>Hello {name}</h1>
    );
}



import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import BasicReact from "./components/BasicReact.jsx";
// import EventHandling from "./components/EventHandling.jsx";
import CounterApp from "./components/CounterApp.jsx";

// let root1 = ReactDOM.createRoot(document.getElementById("root1"));
// let root2 = ReactDOM.createRoot(document.getElementById("root2"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Display /> */}
    {/* <BasicReact /> */}
    {/* <EventHandling /> */}
    <CounterApp />
  </React.StrictMode>
);

// const root1 = document.getElementById("root1");
// const root2 = ReactDOM.createRoot(document.getElementById("root2"));
// setInterval(() => {
//   root1.innerHTML = `
//   <div>
//   <h1>This is actual dom</h1>
//   <input type="text" />

//   <h1>${new Date().toLocaleTimeString()}</h1>
//   </div>`;

//   root2.render(
//     <div>
//       <h1> &nbsp;This is virtual dom</h1>
//       <input type="text" />
//       <h1>{new Date().toLocaleTimeString()}</h1>
//     </div>
//   );
// }, 1000);

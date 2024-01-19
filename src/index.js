import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import Appcopy from './App copy.js'
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Appcopy/>
   
    {/* <StarRating
      maxRating={5}
      // message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    /> */}
    
   
  </React.StrictMode>
);

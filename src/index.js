import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'jquery';
// import 'popper';
import "bootstrap/dist/js/bootstrap.bundle.min";
// import "bootswatch/dist/cerulean/bootstrap.min.css";
// Import of available bootwatch theme name to an array

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename='/webdeveloper-portfolio-plus'>
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
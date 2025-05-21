<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./loginpages/login";
import Signup from "./signuppages/signup";
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './loginpages/login';
import HomePage from './homepages/HomePages';
>>>>>>> 24406288718696f2d69c9c9cde2e716b05624859

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
<<<<<<< HEAD
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
=======
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<HomePage/>} />
>>>>>>> 24406288718696f2d69c9c9cde2e716b05624859
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
);

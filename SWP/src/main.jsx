import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './loginpages/login';
import HomePage from './homepages/HomePages';
import Signup from './signuppages/Signup';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<HomePage/>} />
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
);
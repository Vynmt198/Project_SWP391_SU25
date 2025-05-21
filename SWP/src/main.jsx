import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './loginpages/login';
import HomePage from './homepages/HomePages';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<HomePage/>} />
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
);
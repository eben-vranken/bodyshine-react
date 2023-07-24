import React from 'react';
import ReactDOM from 'react-dom/client';
import './styling/index.css';
import App from './App';

// Router
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
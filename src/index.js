import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Header from './components/header/header.js';
import Nav from './components/nav/nav.js';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Nav />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

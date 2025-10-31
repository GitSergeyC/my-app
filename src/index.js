import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
		<Nav />
  </React.StrictMode>
);

reportWebVitals();

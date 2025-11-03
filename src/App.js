import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home.js';
import SmallRepair from './components/pages/smallRepair/SmallRepair.js';
import Moving from './components/pages/moving/Moving.js';
import Workers from './components/pages/workers/Workers.js';
import Furniture from './components/pages/furniture/Furniture.js';
import Bricks from './components/pages/bricks/Bricks.js';
import Trash from './components/pages/trash/Trash.js';
import "./App.css";

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/melkij-remont" element={<SmallRepair />} />
        <Route path="/pereezd" element={<Moving />} />
        <Route path="/gruzchiki" element={<Workers />} />
        <Route path="/mebel" element={<Furniture />} />
        <Route path="/kirpichiki" element={<Bricks />} />
        <Route path="/vyvoz-musora" element={<Trash />} />
      </Routes>
    </main>
  );
}

export default App;

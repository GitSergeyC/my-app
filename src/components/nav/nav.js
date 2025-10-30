import { useState } from 'react';
import './nav.css';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    'Мелкий ремонт',
    'Переезд',
    'Услуги грузчиков',
    'Сборка и разборка мебели',
    'Вывоз мусора'
  ];

  return (
    <>
      {/* Кнопка-гамбургер для мобильных */}
      <button
        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Навигация */}
      <nav className={`side-nav ${menuOpen ? 'active' : ''}`}>
        <h3 className="nav-title">Наши услуги</h3>
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Nav;

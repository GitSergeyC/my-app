import { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Мелкий ремонт', path: '/melkij-remont' },
    { name: 'Переезд', path: '/pereezd' },
    { name: 'Услуги грузчиков', path: '/gruzchiki' },
    { name: 'Сборка и разборка мебели', path: '/mebel' },
    { name: 'Кирпичики', path: '/kirpichiki' },
    { name: 'Вывоз мусора', path: '/vyvoz-musora' },
  ];

  return (
    <>
      <button
        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`side-nav ${menuOpen ? 'active' : ''}`}>
        <h3 className="nav-title">Наши услуги</h3>
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)} // закрывает меню после клика
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Nav;

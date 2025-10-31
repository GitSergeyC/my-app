import React from "react";
import './bricks.css';

export default function Bricks() {

	const gallery = [
    "/brik1.jpg",
    "/brik2.png",
    "/brik3.png",
    "/brik4.png",
  ];

  return (
    <div className="App">
      <header className="hero">
        <div className="hero-content">
          <h1>Декоративный кирпич ручной работы</h1>
          <a href="#catalog" className="btn-primary">
            Смотреть каталог
          </a>
        </div>
        <div className="hero-image"></div>
      </header>

      <section className="features">
        <div className="feature-item">
          <i className="icon-texture"></i>
          <p>Натуральная текстура</p>
        </div>
        <div className="feature-item">
          <i className="icon-easy"></i>
          <p>Простая установка</p>
        </div>
        <div className="feature-item">
          <i className="icon-delivery"></i>
          <p>Быстрая доставка</p>
        </div>
      </section>

      <section className="gallery">
        <h2>Галерея</h2>
        <div className="gallery-grid">
          {gallery.map((img, i) => (
            <div className="gallery-item" key={i}>
              <img src={img} alt={`brick-${i}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="about">
        <div className="about-img"></div>
        <div className="about-text">
          <h2>О нас</h2>
          <p>
            Мы создаём кирпич, который делает интерьер живым. Каждый элемент
            проходит ручную обработку и проверку качества.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 BrickStyle — Декоративный кирпич ручной работы</p>
      </footer>
    </div>
  );
}

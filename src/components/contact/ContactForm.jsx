import { useState } from 'react';
import './contactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Здесь можно подключить отправку на сервер, Telegram, почту и т.д.
    console.log('Отправлено:', formData);

    setSubmitted(true);
    setFormData({ name: '', phone: '', message: '' });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-container">
      <h2>Свяжитесь с нами</h2>
      <p>Оставьте заявку, и мы перезвоним вам в ближайшее время!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Ваш телефон"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Ваше сообщение"
          value={formData.message}
          onChange={handleChange}
          rows="4"
        ></textarea>

        <button type="submit">Отправить</button>
      </form>

      {submitted && <p className="success-message">✅ Сообщение отправлено!</p>}
    </div>
  );
}

export default ContactForm;

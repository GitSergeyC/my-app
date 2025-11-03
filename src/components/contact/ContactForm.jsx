import React, { useState } from 'react';
import './contactForm.css';

	export default function ContactForm() {
		const [form, setForm] = useState({ name: '', phone: '', message: '' });
		const [success, setSuccess] = useState(false);
		const [loading, setLoading] = useState(false);

		const handleSubmit = async (e) => {
			e.preventDefault();
			setLoading(true);

			try {
				const response = await fetch('http://localhost:5050/send-message', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(form),
				});

				const data = await response.json();
				console.log('Ответ сервера:', data);

				if (data.success) {
					setSuccess(true);
					setForm({ name: '', phone: '', message: '' });
					setTimeout(() => setSuccess(false), 4000);
				} else {
					alert(data.error || 'Ошибка при отправке.');
				}
			} catch (error) {
				console.error('Ошибка при отправке формы:', error);
				alert('Не удалось отправить сообщение. Проверьте соединение с сервером.');
			} finally {
				setLoading(false);
			}
		};

		return (
			<div className="contact-container">
				<h2>Связаться с нами</h2>
				<p>Оставьте заявку — мы перезвоним и ответим на все вопросы.</p>

				<form className="contact-form" onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Ваше имя"
						value={form.name}
						onChange={(e) => setForm({ ...form, name: e.target.value })}
						required
					/>
					<input
						type="tel"
						placeholder="Телефон"
						value={form.phone}
						onChange={(e) => setForm({ ...form, phone: e.target.value })}
						required
					/>
					<textarea
						placeholder="Ваше сообщение"
						rows="4"
						value={form.message}
						onChange={(e) => setForm({ ...form, message: e.target.value })}
					/>
					<button type="submit" disabled={loading}>
						{loading ? 'Отправка...' : 'Отправить'}
					</button>
				</form>

				{success && <p className="success-message">✅ Сообщение успешно отправлено!</p>}
			</div>
		);
	}

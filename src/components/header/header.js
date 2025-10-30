import whatsapp from './../../icons/whatsapp.jpg';
import logo from './../../icons/logo.png';
import './header.css';

function Header() {
  const message = encodeURIComponent('Здравствуйте! Пишу вам с вашего сайта.');
  const phone = '77074519725';
  const waLink = `https://wa.me/${phone}?text=${message}`;

  return (
    <header className="App-header">
      <div className="header-left">
        <img src={logo} alt="Логотип" className="header-logo" />
      </div>

      <div className="header-center">
        Мы работаем — вы отдыхаете
      </div>

      <div className="header-right">
        <a href={waLink} target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} alt="WhatsApp" />
        </a>
        <a href={waLink} target="_blank" rel="noopener noreferrer">
          8 707 451 9725
        </a>
      </div>
    </header>
  );
}

export default Header;

import logo from '../images/header__logo.svg';

function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="https://learn.javascript.ru/" target="_self">
        <img className="header__img" src={logo} alt="Логотип. Место." />
      </a>
    </header>
  );
}

export default Header;

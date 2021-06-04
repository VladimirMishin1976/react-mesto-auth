import React from 'react';
import { Link, Route } from 'react-router-dom';
import logo from '../images/header__logo.svg';

function Header({ userData, handleLogOut }) {
  return (
    <header className="header">
      <a className="header__logo" href="https://learn.javascript.ru/" target="_self">
        <img className="header__img" src={logo} alt="Логотип. Место." />
      </a>
      <Route path='/signup'>
      <p className='header__email'>{userData.email}</p>
        <Link className='header__auth-link' to='/signin'>Войти</Link>
      </Route>
      <Route path='/signin'>
      <p className='header__email'>{userData.email}</p>
        <Link className='header__auth-link' to='/signup'>Регистрация</Link>
      </Route>
      <Route exact path='/'>
        <p className='header__email'>{userData.email}</p>
        <Link className='header__auth-link header__auth-link_type_gray' to='/signin' onClick={handleLogOut} >Выйти</Link>
      </Route>
    </header>
  );
}

export default Header;

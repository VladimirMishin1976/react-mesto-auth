import { Link } from "react-router-dom";

function Register() {

  return (
    <>
      <form className="form" name='register' noValidate onSubmit=''>
        <h2 className="form__title">Регистрация</h2>
        <label className="form__field">
          <input className="form__input" type="email" placeholder="Email" name="email" onChange='{handleChangeNameCard}' value='' />
        </label>
        <label className="form__field">
          <input className="form__input" type="password" placeholder="Пароль" name="password" onChange='{handleChangeNameCard}' value='' />
        </label>
        <button className="form__button" type="submit">Зарегистрироваться</button>
        <Link className='form__link' to='./sign-up' >Уже зарегистрированы? Войти</Link>
      </form>

    </>
  );
}

export default Register;
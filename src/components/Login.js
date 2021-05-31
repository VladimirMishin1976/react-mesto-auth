function Login() {

  return (
    <form className="form" name='login' noValidate onSubmit=''>
      <h2 className="form__title">Вход</h2>
      <label className="form__field">
        <input className="form__input" type="email" placeholder="Email" name="email" onChange='{handleChangeNameCard}' value='' />
      </label>
      <label className="form__field">
        <input className="form__input" type="password" placeholder="Пароль" name="password" onChange='{handleChangeNameCard}' value='' />
      </label>
      <button className="form__button" type="submit">Войти</button>
    </form>
  );
}

export default Login;
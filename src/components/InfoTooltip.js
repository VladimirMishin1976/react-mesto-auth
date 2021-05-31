import successSign from '../images/success.svg';
import unSuccessSign from '../images/unsuccess.svg';

function InfoTooltip() {
  return (
    <div className='popup'>
      <div className='popup__container popup__container_place_info-tool'>
        <img className='info-tool__img' alt='Знак успешно' src={unSuccessSign} />
        <h2 className=" popup__title popup__title_type_center">Вы успешно зарегистрировались!</h2>
        <button className="popup__close popup__close_profile" type="button" aria-label="Закрыть" onClick='{onClose}'></button>
      </div>
    </div >
  )
}

export default InfoTooltip;
import React from "react";
import { useHistory } from "react-router-dom";
import "./RegCheck.css";

export default function RegCheck() {
  const history = useHistory();

  return (
    <div className='reg-check-screen'>
      <h1 className="mb-5 mt-5 text-center">Подтверждение регистрации</h1>
      <div className="alert alert-primary" role="alert">
        На указанную почту был выслан код подтверждения. Введите его в поле ниже.
      </div>
      <div className="mb-3">
        <label className="form-label ms-3">Введите проверочный код</label>
        <input type="text" className="form-control w3-round-xxlarge" placeholder="12345" />
      </div>

      <button className="btn-green w3-round-xxlarge">Подтвердить</button>
      <button className="btn-green w3-round-xxlarge mt-0">
        Отправить код повторно
      </button>
      <button className="btn-green w3-round-xxlarge mt-0" onClick={history.goBack}>
        Назад
      </button>
    </div>
  );
}

import React from "react";
import { useHistory } from "react-router-dom";
import "./RegCheck.css";

export default function RegCheck() {
  const history = useHistory();

  return (
    <div>
      <h1 className="mb-5 mt-5">Подтверждение регистрации</h1>
      <div className="alert alert-primary" role="alert">
        На указанную почту был выслан код подтверждения. Введите его в поле ниже.
      </div>
      <div className="mb-3">
        <label className="form-label">Введите проверочный код</label>
        <input type="text" className="form-control" placeholder="12345" />
      </div>

      <button className="btn btn-primary">Подтвердить</button>
      <button className="btn btn-primary">
        Отправить проверочный код повторно
      </button>
      <button className="btn btn-primary" onClick={history.goBack}>
        Назад
      </button>
    </div>
  );
}

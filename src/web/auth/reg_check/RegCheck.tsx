import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoadingScreen from "../../loadingscreen/LoadingScreen";
import "./RegCheck.css";
import routes from '../../routes.json'

export default function RegCheck() {
  const history = useHistory();
  const [showLoad, setShowLoad] = useState(false)

  const checkReg = async () => {
    setShowLoad(true)
    const response = await fetch("http://10.17.0.214:8000/api/v1/auth/confirm/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: sessionStorage.getItem('email'),
        code: '77777',
      }),
    });
    if (response.ok) {
      const result = await response.json();
      localStorage.setItem("token", result.token);
      sessionStorage.setItem("email", result.user.email);
      sessionStorage.setItem("user_type", result.user.user_type);
      sessionStorage.setItem("name", result.user.name);
      sessionStorage.setItem('account_number', result.user.account_number)
      sessionStorage.setItem('is_esia_confirm', result.user.is_esia_confirm)
      setShowLoad(false);
      history.push(routes.login)
    } else {
      setShowLoad(false);
      alert("error");
    }
  }

  return (
    <div className='reg-check-screen'>
      <LoadingScreen visible={showLoad}/>
      <h1 className="mb-5 mt-5 text-center">Подтверждение регистрации</h1>
      <div className="alert alert-primary" role="alert">
        На указанную почту был выслан код подтверждения. Введите его в поле ниже.
      </div>
      <div className="mb-3">
        <label className="form-label ms-3">Введите проверочный код</label>
        <input type="text" className="form-control w3-round-xxlarge" placeholder="12345" />
      </div>

      <button className="btn-green w3-round-xxlarge" onClick={checkReg}>Подтвердить</button>
      <button className="btn-green w3-round-xxlarge mt-0">
        Отправить код повторно
      </button>
      <button className="btn-green w3-round-xxlarge mt-0" onClick={history.goBack}>
        Назад
      </button>
    </div>
  );
}

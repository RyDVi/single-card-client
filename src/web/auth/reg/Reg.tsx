import React from "react";
import { useHistory } from "react-router-dom";
import "./Reg.css";
import routes from "../../routes.json";

export default function Reg() {
  const history = useHistory();
  const navToRegCheck = () => {
    history.push(routes.reg_check);
  };
  const reg = async () => {
    const response = await fetch("http://10.17.0.214:7000/auth/registration/", {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json;charset=utf-8'
      },
      body:JSON.stringify({
        email: 'aaa1@mail.ru',
        password: '12345678'
      })
    })
    if(response.ok){
      const result = response.json()
      console.log(result)
    } else {
      alert('error')
    }
  };
  return (
    <div>
      <h1 className="mb-5 mt-5">Регистрация</h1>
      <div className="mb-3">
        <label className="form-label">Как к Вам обращаться?</label>
        <input type="text" className="form-control" placeholder="Иван Иванов" />
      </div>
      <div className="mb-3">
        <label className="form-label">Ваша почта</label>
        <input
          type="email"
          className="form-control"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Пароль</label>
        <input type="password" className="form-control" placeholder="Пароль" />
      </div>
      <div className="mb-3">
        <label className="form-label">Повторите пароль</label>
        <input
          type="password"
          className="form-control"
          placeholder="Повторите пароль"
        />
      </div>
      <button className="btn btn-primary" onClick={reg}>
        Зарегистрироваться
      </button>
      <button className="btn btn-primary" onClick={history.goBack}>
        Назад
      </button>
    </div>
  );
}

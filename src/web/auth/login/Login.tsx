import React from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import routes from "../../routes.json";

export default function Login() {
  const history = useHistory();
  const navToReg = () => {
    history.push(routes.reg);
  };

  const login = async () => {
    // const response = await fetch("http://10.17.0.214:7000/auth/login/", {
    //   method: 'POST',
    //   headers:{
    //     'Content-Type': 'application/json;charset=utf-8'
    //   },
    //   body:JSON.stringify({
    //     email: 'aaa1@mail.ru',
    //     password: '12345678'
    //   })
    // })
    // if(response.ok){
    //   const result = response.json()
    //   console.log(result)
    // } else {
    //   alert('error')
    // }
    history.push(routes.main);
  };
  return (
    <div>
      <h1 className="mb-5 mt-5">Авторизация</h1>
      <div className="mb-3">
        <label className="form-label">Почта</label>
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
      <button className="btn btn-primary" onClick={login}>
        Войти
      </button>
      <button className="btn btn-primary" onClick={navToReg}>
        Регистрация
      </button>
    </div>
  );
}

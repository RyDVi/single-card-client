import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import routes from "../../routes.json";
import "w3-css";
import nov from "./novorossisk_logo.svg";

export default function Login() {
  const history = useHistory();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navToReg = () => {
    history.push(routes.reg);
  };

  const navToMain = () => {
    history.push(routes.main);
  };

  const login = async () => {
    navToMain()
    return
    //---
    const response = await fetch("http://10.17.0.214:8000/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: loginData.email,
        password: loginData.password,
      }),
    });
    if (response.ok) {
      const result = await response.json();
      localStorage.setItem("token", result.token);
      navToMain();
    } else {
      alert("error");
    }
    // history.push(routes.main);
  };
  return (
    <div className='login-screen'>
      <h1 className="mb-5 mt-5 text-center">Авторизация</h1>
      <div className="mb-3">
        <label className="form-label ms-3">Почта</label>
        <input
          type="email"
          className="form-control w3-round-xxlarge"
          placeholder="name@example.com"
          value={loginData.email}
          defaultValue={loginData.email}
          onChange={(event) => {
            setLoginData({
              ...loginData,
              email: event.target.value.toString(),
            });
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label ms-3">Пароль</label>
        <input
          type="password"
          className="form-control w3-round-xxlarge"
          placeholder="Пароль"
          value={loginData.password}
          defaultValue={loginData.password}
          onChange={(event) => {
            setLoginData({
              ...loginData,
              password: event.target.value.toString(),
            });
          }}
        />
      </div>
      <button className="btn-green w3-round-xxlarge" onClick={login}>
        Войти
      </button>
      <button className="btn-green w3-round-xxlarge mt-0" onClick={navToReg}>
        Регистрация
      </button>
      <object className='novorossisk_logo' data={nov}></object>
    </div>
  );
}

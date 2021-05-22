import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Reg.css";
import routes from "../../routes.json";
import { stringify } from "querystring";

export default function Reg() {
  const history = useHistory();
  const [regData, setRegData] = useState({
    email: "",
    name: "",
    password: "",
    repeatPassword: "",
  });
  const navToRegCheck = () => {
    history.push(routes.reg_check);
  };
  const reg = async () => {
    if (regData.password !== regData.repeatPassword) {
      return;
    }
    const response = await fetch("http://10.17.0.214:8000/auth/registration/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: regData.email,
        password: regData.password,
      }),
    });
    if (response.ok) {
      const result = response.json();
      console.log(result);
      navToRegCheck()
    } else {
      alert("error");
    }
  };
  return (
    <div className='reg-screen'>
      <h1 className="mb-5 mt-5">Регистрация</h1>
      <div className="mb-3">
        <label className="form-label ms-3">Как к Вам обращаться?</label>
        <input
          type="text"
          className="form-control w3-round-xxlarge"
          placeholder="Иван Иванов"
          value={regData.name}
          defaultValue={regData.name}
          onChange={(event) => {
            setRegData({ ...regData, name: event.target.value.toString() });
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label ms-3">Ваша почта</label>
        <input
          type="email"
          className="form-control w3-round-xxlarge"
          placeholder="name@example.com"
          value={regData.email}
          defaultValue={regData.email}
          onChange={(event) => {
            setRegData({ ...regData, email: event.target.value.toString() });
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label ms-3">Пароль</label>
        <input
          type="password"
          className="form-control w3-round-xxlarge"
          placeholder="Пароль"
          value={regData.password}
          defaultValue={regData.password}
          onChange={(event) => {
            setRegData({ ...regData, password: event.target.value.toString() });
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label ms-3">Повторите пароль</label>
        <input
          type="password"
          className="form-control w3-round-xxlarge"
          placeholder="Повторите пароль"
          value={regData.repeatPassword}
          defaultValue={regData.repeatPassword}
          onChange={(event) => {
            setRegData({
              ...regData,
              repeatPassword: event.target.value.toString(),
            });
          }}
        />
      </div>
      <button className="btn-green w3-round-xxlarge" onClick={reg}>
        Зарегистрироваться
      </button>
      <button className="btn-green w3-round-xxlarge mt-0" onClick={history.goBack}>
        Назад
      </button>
    </div>
  );
}

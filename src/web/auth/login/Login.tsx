import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import routes from "../../routes.json";
import "w3-css";
import nov from "./novorossisk_logo.svg";
import LoadingScreen from "../../loadingscreen/LoadingScreen";

export default function Login() {
  const history = useHistory();
  const [showLoad, setShowLoad] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [checks, setChecks] = useState({
    email: "",
    password: "",
  });
  const navToReg = () => {
    history.push(routes.reg);
  };

  const navToMain = () => {
    history.push(routes.main);
  };

  const checkFields = () => {
    if (!loginData.email || !loginData.password) {
      console.log(loginData)
      if (!loginData.email) setChecks({ ...checks, email: "is-invalid" });
      else setChecks({ ...checks, email: "is-valid" });
      if (!loginData.password) setChecks({ ...checks, password: "is-invalid" });
      else setChecks({ ...checks, password: "is-valid" });
      return false;
    }
    return true;
  };

  const login = async () => {
    if (!checkFields()) return;
    setShowLoad(true)
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
      setShowLoad(false)
      navToMain();
    } else {
      setShowLoad(false)
      alert("error");
    }
    
  };
  return (
    <div className="login-screen">
      <LoadingScreen visible={showLoad}/>
      <h1 className="mb-5 mt-5 text-center">Авторизация</h1>
      <div className="mb-3 grade-zindex">
        <label className="form-label ms-3">Почта</label>
        <input
          type="email"
          className={`form-control w3-round-xxlarge ${checks.email}`}
          placeholder="name@example.com"
          value={loginData.email}
          defaultValue={loginData.email}
          onChange={(event) => {
            setLoginData({
              ...loginData,
              email: event.target.value.toString(),
            });
            checkFields()
          }}
        />
      </div>
      <div className="mb-3 grade-zindex">
        <label className="form-label ms-3">Пароль</label>
        <input
          type="password"
          className={`form-control w3-round-xxlarge ${checks.password}`}
          placeholder="Пароль"
          value={loginData.password}
          defaultValue={loginData.password}
          onChange={(event) => {
            setLoginData({
              ...loginData,
              password: event.target.value,
            });
            checkFields()
          }}
        />
      </div>
      <button
        className="btn-green w3-round-xxlarge grade-zindex"
        onClick={login}
      >
        Войти
      </button>
      <button
        className="btn-green w3-round-xxlarge mt-0 grade-zindex"
        onClick={navToReg}
      >
        Регистрация
      </button>
      <object className="novorossisk_logo" data={nov}></object>
    </div>
  );
}

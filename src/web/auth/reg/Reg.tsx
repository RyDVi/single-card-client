import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Reg.css";
import routes from "../../routes.json";
import LoadingScreen from "../../loadingscreen/LoadingScreen";

export default function Reg() {
  const history = useHistory();
  const [showLoad, setShowLoad] = useState(false);
  const [regData, setRegData] = useState({
    email: "",
    name: "",
    password: "",
    repeatPassword: "",
    user_type: "citizen",
  });
  const navToRegCheck = () => {
    history.push(routes.reg_check);
  };
  const reg = async () => {
    if (regData.password !== regData.repeatPassword) {
      return;
    }
    setShowLoad(true);
    const response = await fetch(
      "http://10.17.0.214:8000/api/v1/auth/registration/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: regData.email,
          password: regData.password,
          confirm_password: regData.repeatPassword,
          name: regData.name,
          user_type: regData.user_type,
        }),
      }
    );
    if (response.ok) {
      const result = await response.json();
      sessionStorage.setItem("email", result.user.email);
      setShowLoad(false);
      navToRegCheck();
    } else {
      setShowLoad(false);
      alert("error");
    }
  };
  return (
    <div className="reg-screen">
      <LoadingScreen visible={showLoad} />
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
        <label className="form-label ms-3">Вы гость или житель?</label>
        <select
          className="form-select w3-round-xxlarge"
          onChange={(event) => {
            setRegData({
              ...regData,
              user_type: event.target.value.toString(),
            });
          }}
        >
          <option value="citizen" selected>Житель</option>
          <option value="guest">Гость</option>
        </select>
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
      <button
        className="btn-green w3-round-xxlarge mt-0"
        onClick={history.goBack}
      >
        Назад
      </button>
    </div>
  );
}

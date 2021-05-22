import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Main.css";
import { Link, useHistory } from "react-router-dom";
import routes from "../routes.json";
import CardContainer from "./card_container/CardContainer";
import MainSidebar from "../profile/main_sidebar/MainSidebar";
import "w3-css";

export default function Main() {
  const cardsData = [
    {
      id: 1,
      name: "Транспортная карта",
      number: "1111-2222-3333-4444",
      balance: 300,
    },
    {
      id: 2,
      name: "Ученическая карта",
      number: "1111-2222-3333-4444",
      balance: 0,
    },
  ];
  const newsData = [
    {
      id: 1,
      title: "Скидка в кафе на выпечку",
      description: "Сегодня предоставляется скидка 10% на выпечку в кафе",
    },
    {
      id: 2,
      title: "В кафе день рождения",
      description: "Сегодня В кафе день рождения. Успейте на праздник",
    },
  ];

  const lastAchievements = [
    {
      id: 1,
      name: "Поездки с единой картой",
      img: "",
      description: "Оплатите проезд транспортной картой",
      done: false,
    },
    {
      id: 2,
      name: "Покупка сувениров с единой картой",
      img: "",
      description: "Купите сувенир у одного из партнеров с картой",
      done: false,
    },
  ];

  const [leftMenuDisplay, setLeftMenu] = useState("d-none");

  const history = useHistory();
  return (
    <div className="main-screen">
      <div
        className={`sidebar w3-sidebar w3-bar-block w3-card w3-animate-left p-3 ${leftMenuDisplay}`}
      >
        <div className="d-flex justify-content-between">
          <h3>Дополнительно</h3>
          <button
            className="btn"
            onClick={() => {
              setLeftMenu("d-none");
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item btn-green w3-round-xxlarge mt-3">
            <Link className="nav-link" to={routes.profile}>
              Профиль
            </Link>
          </li>
          <li className="nav-item btn-green w3-round-xxlarge mt-3">
            <Link className="nav-link" to={`${routes.cards}/1`}>
              Мои средства
            </Link>
          </li>
          <li className="nav-item btn-green w3-round-xxlarge mt-3">
            <Link className="nav-link" to={routes.achievements}>
              Достижения
            </Link>
          </li>
          <li className="nav-item btn-green w3-round-xxlarge mt-3">
            <a className="nav-link">Услуги</a>
          </li>
        </ul>
      </div>

      <header className="p-2">
        <button
          className="btn btn-success"
          onClick={() => {
            setLeftMenu("d-block");
          }}
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "black" }} />
        </button>
      </header>
      <div className="container-md">
        <div className="row">
          <div className="col d-flex justify-content-center mt-2 mb-2">
            <CardContainer
              title="Карты"
              path={routes.cards}
              cardBody={
                <ul className="list-group ">
                  {cardsData.map(({ id, name, number, balance }) => {
                    return (
                      <li
                        key={id}
                        className="list-group-item d-flex justify-content-between align-items-start"
                      >
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">{name}</div>
                          {number}
                        </div>
                        <span className="badge bg-primary rounded-pill">
                          {balance}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              }
            />
          </div>
          <div className="col d-flex justify-content-center mt-2 mb-2">
            <CardContainer
              title="Новости"
              path={routes.news}
              cardBody={
                <ul className="list-group list-group-flush">
                  {newsData.map(({ id, title, description }) => {
                    return (
                      <li
                        key={id}
                        className="list-group-item d-flex justify-content-between align-items-start"
                      >
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">{title}</div>
                          {description}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              }
            />
          </div>
          <div className="col d-flex justify-content-center mt-2 mb-2">
            <CardContainer
              title="Достижения"
              path={routes.achievements}
              cardBody={
                <ul className="list-group list-group-flush">
                  {lastAchievements.map(({ id, name, description }) => {
                    return (
                      <li
                        key={id}
                        className="list-group-item d-flex justify-content-between align-items-start"
                      >
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">{name}</div>
                          {description}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

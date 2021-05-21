import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Main.css";
import { useHistory } from "react-router-dom";
import routes from "../routes.json";
import CardContainer from "./card_container/CardContainer";

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

  const history = useHistory();

  return (
    <div>
      <header className="header">
        <button className="btn btn-outline-primary" onClick={() => {}}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <span className="badge bg-primary">112 баллов</span>
      </header>
      <div className="container-md">
        <div className="row">
          <div className="col">
            <CardContainer
              title="Карты"
              path={routes.cards}
              cardBody={
                <ul className="list-group list-group-flush">
                  {cardsData.map(({ id, name, number, balance }) => {
                    return (
                      <li className="list-group-item d-flex justify-content-between align-items-start">
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
          <div className="col">
            <CardContainer
              title="Новости"
              path={routes.news}
              cardBody={
                <ul className="list-group list-group-flush">
                  {newsData.map(({ id, title, description }) => {
                    return (
                      <li className="list-group-item d-flex justify-content-between align-items-start">
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
        </div>
      </div>
    </div>
  );
}

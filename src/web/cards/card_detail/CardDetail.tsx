import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { useLocation } from "react-router-dom";
import CardContainer from "../../main/card_container/CardContainer";
import "./CardDetail.css";
import routes from '../../routes.json'

export default function CardDetail() {
  let { id }: { id: string } = useParams();
  const [cardData, setCardData] = useState({
    id: "1",
    number: "1111-2222-3333-4444",
    balance: 350,
    history: [
      {
        id: "1",
        price: 100,
        date: "11.06.2017 11:23:00",
        description: "Пополнение баланса",
      },
      {
        id: "2",
        price: 50,
        date: "11.06.2017 11:23:00",
        description: "Пополнение баланса",
      },
      {
        id: "3",
        price: 100,
        date: "11.06.2017 11:23:00",
        description: "Пополнение баланса",
      },
    ],
  });
  const history = useHistory();
  return (
    <div className="">
      <div className="d-flex">
        <button className="btn" onClick={()=>{history.push(routes.cards)}}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h2 className="w-100 m-2 text-center">Информация о карте</h2>
      </div>
      <div className="w-100 d-flex justify-content-center">
        <div className="plastic-card">
          <div className="plastic-card-header">
            <h2>{cardData.balance} Руб.</h2>
            <span>Последняя поездка: {cardData.history[0].date}</span>
          </div>
          <div className="plastic-card-mline">
            <h3>№{cardData.number}</h3>
          </div>
          <div className="mt-5">
            <CardContainer
              title="История операций"
              path="cards"
              hideBtn={true}
              cardBody={cardData.history.map(
                ({ id, price, date, description }) => {
                  return (
                    <li
                      key={id}
                      className="list-group-item d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">{date}</div>
                        {description}
                      </div>
                      <span className="badge bg-primary rounded-pill">
                        {price}
                      </span>
                    </li>
                  );
                }
              )}
            />
          </div>
        </div>
      </div>
      <button className="btn-fill-money btn-green w3-round-xxlarge">
        Пополнить
      </button>
    </div>
  );
}

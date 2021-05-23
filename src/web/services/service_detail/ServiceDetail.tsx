import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ServiceDetail.css";
import routes from "../../routes.json";

export default function ServiceDetail() {
  let { id }: { id: string } = useParams();

  const reservData = [
    {
      id: 1,
      phone: "+7 (861) 760-65-05",
      description:
        "Простой отель с бесплатным завтраком и доступом к Wi-Fi, а также рестораном, сауной и видом на море.",
      name: "Отель Новороссийск",
      img: '/images/hotel_novorossisk.jpg'
    },
    {
      id: 2,
      phone: "+7 927 687-98-98",
      description:
        "Уютный современный отель с видом на море, рестораном, спа, а также крытым и открытым бассейнами.",
      name: "Отель Hilton Garden",
      img: '/images/hilton_garden.jpg'
    },
    {
      id: 3,
      phone: "+7 (861) 777-01-77",
      description:
        "Скромные номера в простом отеле с рестораном и бесплатным горячим завтраком.",
      name: "Гостиница Капитал",
      img: '/images/hotel_capital.jpg'
    },
  ];

  const history = useHistory();
  return (
    <div className="service-detail-screen">
      <div className="d-flex">
        <button
          className="btn"
          onClick={() => {
            history.push(routes.services);
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h2 className="w-100 m-2 text-center">Бронирование</h2>
      </div>
      <div className="w-100 d-flex flex-column justify-content-center">
        {reservData.map(({ id, name, phone, description, img }) => {
          return (
            <div
              key={id}
              className="service-detail-card text-dark text-decoration-none"
            >
              <header>
                <h4>{name}</h4>
              </header>
              <img src={img} />
              <p>{description}</p>
              <span>Тел.: {phone}</span>
              <div className="d-flex justify-content-center p-3 pt-0">
                <div className="reserv-btn btn-green">Бронировать</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

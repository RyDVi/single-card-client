import { faArrowLeft, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router";
import "./Services.css";
import routes from "../routes.json";
import { Link } from "react-router-dom";

export default function News() {
  const history = useHistory();

  const tourismData = [
    {
      id: 1,
      name: "Турагенство Дельфин",
      description:
        "Бронируйте номера отелей, принимайте участие в увлекательных экскурсиях по Новороссийску с туристическим агенством Дельфин",
      discount: 10,
    },
  ];

  const relaxPlacesData = [
    {
      id: 1,
      name: "Ресторан Алмаз",
      description:
        "Проведите вечер в кругу семьи или друзей в ресторане Алмаз. Держатели Единой карты получат приятные бонусы при любом заказе",
      discount: 5,
    },
  ];

  return (
    <div className="news-screen">
      <div className="d-flex">
        <button className="btn" onClick={()=>{history.push(routes.main)}}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className="w-100 mt-2">
          <h3 className="text-center">Услуги</h3>
        </div>
      </div>
      <div className="w-100 d-flex flex-column align-items-center mb-4">
        <div className="w3-round-xxlarge title-circle-yellow mt-4">Туризм</div>
        {tourismData.map(({ id, name, description, discount }) => {
          return (
            <Link
              key={id}
              to={`${routes.services}/${id}`}
              className="service-card text-dark text-decoration-none"
            >
              <header>
                <h4>{name}</h4>
              </header>
              <p>{description}</p>
              <div className="d-flex justify-content-end p-3 pt-0">
                <div className="discount-btn btn-green">-{discount}%</div>
              </div>
            </Link>
          );
        })}

        <div className="w3-round-xxlarge title-circle-yellow mt-4">
          Предложения
        </div>
        {relaxPlacesData.map(({ id, name, description, discount }) => {
          return (
            <Link
              key={id}
              className="service-card text-dark text-decoration-none"
              to={`${routes.services}/${id}`}
            >
              <header>
                <h4>{name}</h4>
              </header>
              <p>{description}</p>
              <div className="d-flex justify-content-end p-3 pt-0">
                <div className="discount-btn btn-green">-{discount}%</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

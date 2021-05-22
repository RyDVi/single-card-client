import { faArrowLeft, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory } from "react-router";
import "./News.css";

export default function Achievements() {
  const history = useHistory();

  const cultureData = [
    {
      id: 1,
      title: "Новый фильм в прокате",
      description:
        "В кинотеатрах Новороссийска вышел новый фильм. Смотрите во всех кинотеатрах города",
      image: "/images/stathem.png",
    },
  ];

  const offerData = [
    {
      id: 1,
      title: "Скидки в магазине шляп",
      description:
        "Получайте скидки до 30% на новые шляпы, а также до 10% по единой карте",
      image: "/images/news2.png",
    },
  ];

  return (
    <div className="achievements-screen">
      <div className="d-flex">
        <button className="btn" onClick={history.goBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className="w-100 mt-2">
          <h3 className="text-center">Новости</h3>
        </div>
      </div>
      <div className="w-100 d-flex flex-column align-items-center mb-4">
        <div className="w3-round-xxlarge title-circle-yellow mt-4">
          Культура
        </div>
        {cultureData.map(({ id, title, description, image }) => {
          return (
            <div className="news-card">
              <header>
                <h4>{title}</h4>
              </header>
              <img src={image} />
              <p>{description}</p>
              <div className='d-flex justify-content-end p-3 pt-0'>
                <div className="more-details-btn">
                  <FontAwesomeIcon icon={faEllipsisH} />
                </div>
              </div>
            </div>
          );
        })}

        <div className="w3-round-xxlarge title-circle-yellow mt-4">
          Предложения
        </div>
        {offerData.map(({ id, title, description, image }) => {
          return (
            <div className="news-card">
              <header>
                <h4>{title}</h4>
              </header>
              <img src={image} />
              <p>{description}</p>
              <div className='d-flex justify-content-end p-3 pt-0'>
                <div className="more-details-btn">
                  <FontAwesomeIcon icon={faEllipsisH} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

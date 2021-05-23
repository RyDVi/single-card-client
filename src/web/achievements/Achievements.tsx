import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router";
import "./Achievements.css";
import routes from '../routes.json'

const getColor = (region: string) => {
  switch (region) {
    case "central":
      return "rgb(239,90,41)";
    case "south":
      return "rgb(119,64,166)";
    default:
      return "rgb(255,255,255)";
  }
};

export default function Achievements() {
  const history = useHistory();
  const achievementsGetted = [
    {
      id: 1,
      img: "/images/achiev1.png",
      title: "Поездки с единой картой",
      desctiption: "Оплатите проезд транспортной картой",
      region: "",
    },
    {
      id: 2,
      img: "/images/achiev2.png",
      title: "Провожающая",
      desctiption: "Посетите памятник женам моряков",
      region: "central",
    },
    {
      id: 3,
      img: "/images/achiev3.png",
      title: "Двенадцать рыбаков",
      desctiption: "Посетите памятник погибшим рыбакам сейнера Уруп",
      region: "central",
    },
    {
      id: 4,
      img: "/images/achiev4.png",
      title: "Малая земля",
      desctiption: "Посетите мемориальный комплекс Малая земля",
      region: "south",
    },
  ];
  const achievementsNotGetted = [
    {
      id: 5,
      img: "/images/achiev5.png",
      title: "Исход Белой армии",
      desctiption: "Посетите памятник Исходу Белой армии",
      region: "central",
    },
  ];
  return (
    <div className="achievements-screen">
      <div className="d-flex">
        <button className="btn" onClick={()=>{history.push(routes.main)}}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className="w-100 mt-2">
          <h3 className="text-center">Достижения</h3>
        </div>
      </div>
      <div className="w-100 d-flex flex-column align-items-center mb-4">
        <div className="w3-round-xxlarge title-circle-yellow mt-4">
          Полученные
        </div>
        {achievementsGetted.map(({ id, img, title, desctiption, region }) => {
          let bgcolor = getColor(region);
          return (
            <div
              className="achievement-container mt-3"
              style={{ backgroundColor: bgcolor }}
              key={id}
            >
              <img className="achievement-img" src={img} />
              <div className="d-flex flex-column">
                <div className="fw-bold">{title}</div>
                <div>{desctiption}</div>
              </div>
            </div>
          );
        })}
        <div className="w3-round-xxlarge title-circle-yellow mt-4">
          Не полученные
        </div>
        {achievementsNotGetted.map(
          ({ id, img, title, desctiption, region }) => {
            let bgcolor = getColor(region);
            return (
              <div
                className="achievement-container mt-3"
                style={{
                  backgroundColor: bgcolor,
                }}
                key={id}
              >
                <img className="achievement-img" src={img} />
                <div className="d-flex flex-column">
                  <div className="fw-bold">{title}</div>
                  <div>{desctiption}</div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

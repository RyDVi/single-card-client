import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./CardMaster.css";
import routes from "../../routes.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function CardMaster() {
  const cardsData = [
    {
      id: 1,
      imgFront: "/images/elec_nov_front.png",
      imgBack: "/images/elec_nov_back.png",
    },
    {
      id: 2,
      imgFront: "/images/ed_card_scholnika_front.png",
      imgBack: "/images/ed_card_scholnika_back.png",
    },
  ];

  const history = useHistory();

  return (
    <div className="card-master">
      <div className="d-flex">
        <button className="btn" onClick={()=>{history.push(routes.main)}}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h3 className="text-center">Доступные карты</h3>
      </div>
      <div className="card-list">
        {cardsData.map(({ id, imgBack, imgFront }) => {
          return (
            <div className="mt-5" key={id}>
              <Link
                to={`${routes.cards}/${id}`}
                className="mt-5"
                aria-current="true"
              >
                <img className="card-img card-img-front" src={imgFront}></img>
                <img className="card-img card-img-back" src={imgBack}></img>
              </Link>
            </div>
          );
        })}
      </div>
      <button
        className="btn-card-add btn-green w3-round-xxlarge"
        onClick={() => {
          history.push(`${routes.cards}/create`);
        }}
      >
        Добавить карту
      </button>
    </div>
  );
}

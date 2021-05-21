import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./CardMaster.css";
import routes from "../../routes.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function CardMaster() {
  const data = [
    { id: 1, name: "Card 1", description: "Some description of card" },
    { id: 2, name: "Card 2", description: "Some description of card" },
    { id: 2, name: "Card 2", description: "Some description of card" },
    { id: 2, name: "Card 2", description: "Some description of card" },
    { id: 2, name: "Card 2", description: "Some description of card" },
    { id: 2, name: "Card 2", description: "Some description of card" },
    { id: 2, name: "Card 2", description: "Some description of card" },
    { id: 2, name: "Card 2", description: "Some description of card" },
    { id: 2, name: "Card 2", description: "Some description of card" },
    { id: 2, name: "Card 2", description: "Some description of card" },
    { id: 2, name: "Card 2", description: "Some description of card" },
    { id: 2, name: "Card 2", description: "Some description of card" },
    { id: 2, name: "Card 2", description: "Some description of card" },
    { id: 2, name: "Card 2", description: "Some description of card" },
    { id: 2, name: "Card 2", description: "Some description of card" },
  ];

  const history = useHistory();

  return (
    <div className="card-master">
      <div className='d-flex'>
        <button className='btn-back' onClick={history.goBack}>
          <FontAwesomeIcon icon={faArrowLeft}/>
        </button>
        <h3 className="text-center">Доступные карты</h3>
      </div>
      <hr />
      <div className="card-list list-group">
        {data.map(({ id, name, description }) => {
          return (
            <Link
              to={`${routes.cards}/${id}`}
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{name}</h5>
                <small>something</small>
              </div>
              <p className="mb-1">{description}</p>
              <small>something</small>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

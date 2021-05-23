import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ServiceDetail.css";
import routes from '../../routes.json'

export default function ServiceDetail() {
  let { id }: { id: string } = useParams();

  const history = useHistory();
  return (
    <div className="service-detail-screen">
      <div className="d-flex">
        <button className="btn" onClick={()=>{history.push(routes.services)}}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h2 className="w-100 m-2 text-center">Информация о карте</h2>
      </div>
      <div className="w-100 d-flex justify-content-center"></div>
      <button className="btn-fill-money btn-green w3-round-xxlarge">
        Пополнить
      </button>
    </div>
  );
}

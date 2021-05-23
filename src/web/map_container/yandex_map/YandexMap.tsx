import React, { useEffect, useRef } from "react";
import "./YandexMap.css";
import { Button, Map, YMaps } from "react-yandex-maps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import routes from "../../routes.json";
import { useHistory } from "react-router";

export default function YandexMap() {
  const history = useHistory();
  return (
    <div id="map" className="map">
      <header>
        <div className="d-flex">
          <button
            className="btn"
            onClick={() => {
              history.push(routes.main);
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <h2 className="w-100 m-2 text-center">Маршрутная карта</h2>
        </div>
      </header>
      <div
        style={{
          position: "absolute",
          zIndex: 100,
          bottom: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          className="btn-green w3-round-xxlarge"
          style={{ width: "300px", height: "50px" }}
        >
          Подбор маршрута
        </button>
      </div>
      <YMaps>
        <Map
          width="100%"
          height="100vh"
          defaultState={{ center: [44.723771, 37.768813], zoom: 14 }}
          options={{
            // @ts-ignore
            restrictMapArea: [
              [44.826174, 37.626478],
              [44.612735, 37.88684],
            ],
          }}
        ></Map>
      </YMaps>
    </div>
  );
}

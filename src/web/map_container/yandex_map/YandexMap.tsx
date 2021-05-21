import React from "react";
import "./YandexMap.css";
import { Map, YMaps } from "react-yandex-maps";

export default function YandexMap() {
  return (
    <div id="map" className="map">
      <YMaps>
        <Map width='100%' height='100vh' defaultState={{ center: [44.723771, 37.768813], zoom: 14 }} />
      </YMaps>
    </div>
  );
}

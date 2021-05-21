import React from "react";
import Sidebar from "./sidebar/Sidebar";
import YandexMap from "./yandex_map/YandexMap";
export default function MapContainer() {
  return (
    <div>
      <Sidebar />
      <YandexMap />
    </div>
  );
}

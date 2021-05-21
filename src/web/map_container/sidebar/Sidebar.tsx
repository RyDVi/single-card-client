import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import routes from '../../routes.json'

export default function Sidebar() {
  return (
    <div className="sidebar bg-white p-3">
      <h3>АААА</h3>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link className="nav-link" to={routes.cards}>Привязанные карты</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link">second</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">third</a>
        </li>
      </ul>
    </div>
  );
}

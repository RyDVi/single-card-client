import React from "react";
import { Link } from "react-router-dom";
import "./MainSidebar.css";
import routes from "../../routes.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function MainSidebar({ opened }: { opened?: boolean }) {
  
  return (
    <div className='sidebar bg-white p-3'>
      <div className="d-flex justify-content-between">
        <h3>АААА</h3>
        <button className="btn" onClick={()=>{}}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>

      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link className="nav-link" to={routes.profile}>
            Профиль
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link">Мои средства</a>
        </li>
      </ul>
    </div>
  );
}

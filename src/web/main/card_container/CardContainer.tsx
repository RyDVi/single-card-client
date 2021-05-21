import React, { ReactNode } from "react";
import { useHistory } from "react-router-dom";
import "./CardContainer.css";

export default function CardContainer({
  title,
  path,
  cardBody,
}: {
  title: string;
  path: string;
  cardBody: ReactNode;
}) {
  const history = useHistory();
  return (
    <div className="card card-container">
      <div className="card-container-header d-flex justify-content-between">
        <h5 className="text-center">{title}</h5>
        <button
          className="btn btn-outline-secondary h-100"
          type="button"
          onClick={() => {
            history.push(path);
          }}
        >
          Все
        </button>
      </div>
      <div className="card-body p-0">{cardBody}</div>
    </div>
  );
}

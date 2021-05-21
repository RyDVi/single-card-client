import React from "react";
import { Route } from "react-router-dom";
import routes from "../routes.json";
import CardDetail from "./card_detail/CardDetail";
import CardMaster from "./card_master/CardMaster";

export default function Cards() {
  return (
    <div>
      <Route exact path="">
        <CardMaster />
      </Route>
      <Route path={routes.card}>
        <CardDetail />
      </Route>
    </div>
  );
}

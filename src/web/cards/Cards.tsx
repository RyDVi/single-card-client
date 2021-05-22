import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../routes.json";
import CardDetail from "./card_detail/CardDetail";
import CardMaster from "./card_master/CardMaster";

export default function Cards() {
  return (
    <div className="d-flex">
      {window.innerWidth > 700 ? (
        <>
          <Route exact path="">
            <CardMaster />
          </Route>
          <Route path={routes.card}>
            <CardDetail />
          </Route>
        </>
      ) : (
        <>
          <Switch>
            <Route path={routes.card}>
              <CardDetail />
            </Route>
            <Route path={routes.cards}>
              <CardMaster />
            </Route>
          </Switch>
        </>
      )}
    </div>
  );
}

import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Auth.css";
import routes from "../routes.json";
import Reg from "./reg/Reg";
import RegCheck from "./reg_check/RegCheck";
import Login from "./login/Login";

export default function Auth() {
  return (
    <div className="auth-window">
      <Switch>
        <Route path={routes.reg}>
          <Reg />
        </Route>
        <Route path={routes.reg_check}>
          <RegCheck />
        </Route>
        <Route path={routes.login}>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

import React from "react";
import { Redirect } from "react-router-dom";
import routes from "../routes.json";

export default function Home() {
  let token = localStorage.getItem('token')
  if (token) {
    return <Redirect to={routes.main} />;
  }
  return <Redirect to={routes.login} />;
}

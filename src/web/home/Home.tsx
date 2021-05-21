import React, { useState } from "react";
import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";
import routes from "../routes.json";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  if (loggedIn) {
    return <Redirect to={routes.map} />;
  }
  return <Redirect to={routes.login} />;
}

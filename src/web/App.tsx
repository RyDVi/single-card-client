import React from "react";
import "./App.css";

import { hot } from "react-hot-loader";
import Auth from "./auth/Auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes.json";
import MapContainer from "./map_container/MapContainer";
import Home from "./home/Home";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <script
          src="https://api-maps.yandex.ru/2.1/?apikey=d35de237-1076-4716-a5ed-a7973310b601&lang=ru_RU"
          type="text/javascript"
        ></script>
      </Helmet>
      <Router>
        <Switch>
          <Route path={routes.login}>
            <Auth />
          </Route>
          <Route path={routes.map}>
            <MapContainer />
          </Route>
          <Route path={routes.home}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default hot(module)(App);

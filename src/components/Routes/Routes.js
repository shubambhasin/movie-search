import React from "react";
import { Route, Switch } from "react-router-dom";
import TopMovies from "../TopMovies/TopMovies";

const Routes = (props) => {
  return (
    <Switch>
      <Route path="/topmovies">
        <TopMovies />
      </Route>
    </Switch>
  );
};

export default Routes;

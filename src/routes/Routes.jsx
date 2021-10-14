import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RouteTypes from "./../routes/RouteTypes";

export const Routes = () => {
  return (
    <Switch>
      {RouteTypes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          component={route.main}
          exact={route.exact}
        />
      ))}
      <Redirect from="*" to="/" />
    </Switch>
  );
};

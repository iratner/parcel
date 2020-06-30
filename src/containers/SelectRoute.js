import React from "react";
import { Switch, Route } from "react-router-dom";

export const SelectRoute = () => {
  return (
    <Switch>
      <Route path={"/"}>
        <div>Build me out sister!</div>
      </Route>
    </Switch>
  );
};

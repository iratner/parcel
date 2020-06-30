import React from "react";
import { Switch, Route } from "react-router-dom";

export const SelectRoute = () => {
  return (
    <Switch>
      <Route path={"/"}>
        <div>This is home</div>
      </Route>
    </Switch>
  );
};

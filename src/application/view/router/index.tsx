import React, { FC } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import { NotFoundPage } from "../pages/NotFoundPage";
import { DashboardPage } from "../pages/DashboardPage";


export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/404" component={NotFoundPage} />

        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};

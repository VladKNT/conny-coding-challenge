import React, { FC } from "react";
import { Provider } from "react-redux";

import { Router } from "./view/router";
import { configureStore } from "./data/store/configureStore";

const store = configureStore();

export const App: FC = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

import "sanitize.css";
import "sanitize.css/typography.css";
import "../src/sass/style.scss";
import WebFont from "webfontloader";

import { BrowserRouter as Router } from "react-router-dom";

import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../redux/init_redux";

// Add the same fonts you would load in index.js
WebFont.load({
  google: {
    families: ["Lora:ital,wght@1,500"],
  },
});

import { configure, addDecorator } from "@storybook/react";

// Adding the Redux Provider and React Router, just in case they are needed during rendering
addDecorator((story) => (
  <Router>
    <Provider
      store={createStore(
        reducers,
        store,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      {story()}
    </Provider>
  </Router>
));

// automatically import all files ending in *.stories.js
configure(require.context("../stories", true, /\.stories\.js$/), module);

const store = {
  data: {},
  ui: {},
};

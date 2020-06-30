import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "../../redux/init_redux";

import { SelectRoute } from "../containers";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ready: false,
      store: null,
    };
  }

  componentDidMount() {
    this.setState({
      store: createStore(
        reducers,
        {},
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      ),
    });
  }

  render() {
    const { store } = this.state;

    return store ? (
      <Provider store={store}>
        <Router>
          <SelectRoute />
        </Router>
      </Provider>
    ) : (
      <div>Insert a Loader</div>
    );
  }
}
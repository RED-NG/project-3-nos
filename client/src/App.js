import React, { Component } from "react";
import { userLoad } from "./actions/authActions";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "./store";
import Projection from "./pages/Projection";

class App extends Component {
  componentDidMount() {
    store.dispatch(userLoad());
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/inventory" component={Inventory} />
            <Route exact path="/projection" component={Projection} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Categories from "./pages/Categories";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/articles" exact component={() => <Articles />} />
          <Route path="/categories" exact component={() => <Categories />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
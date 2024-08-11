import React from "react";
import LoginForm from "./Components/LoginForm/LoginForm.jsx";
import SignupForm from "./Components/SignupForm/SignupForm.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
